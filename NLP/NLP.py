from google.cloud import language_v1
from google.cloud.language_v1 import enums
import sys, getopt

def analyze_syntax(text_content, wordsArray, headsArray,typesArray):
    client = language_v1.LanguageServiceClient()
    type_ = enums.Document.Type.PLAIN_TEXT
    language = "en"
    document = {"content": text_content, "type": type_, "language": language}
    encoding_type = enums.EncodingType.UTF8
    response = client.analyze_syntax(document, encoding_type=encoding_type)
    index=0
    for token in response.tokens:
        text = token.text
        dependency_edge = token.dependency_edge
        wordsArray.append(text.content)
        headsArray.append(dependency_edge.head_token_index)
        typesArray.append(enums.PartOfSpeech.Tag(token.part_of_speech.tag).name)
        index+=1
def analyze_entities(text_content,entitiesArray):
    client = language_v1.LanguageServiceClient()
    type_ = enums.Document.Type.PLAIN_TEXT
    language = "en"
    document = {"content": text_content, "type": type_, "language": language}
    encoding_type = enums.EncodingType.UTF8
    response = client.analyze_entities(document, encoding_type=encoding_type)
    for entity in response.entities:
        entitiesArray.append(entity.name)


def getParentVerb(word, wordsArray,headsArray,typesArray):
    index = wordsArray.index(word)
    parentIndex=headsArray[index]
    while typesArray[parentIndex]!="VERB":
        parentIndex=headsArray[parentIndex]
    return(wordsArray[parentIndex])
def getChildrenWords(word, wordsArray,headsArray, typesArray):
    index = wordsArray.index(word)
    return [wordsArray[i] for i in range(len(wordsArray)) if headsArray[i]==index and typesArray[i] in ["ADJ", "ADV", "DET"] and wordsArray[i] not in ["the","a","an","this","that", "these","those"]]
def getChildrenWordsByIndex(index, wordsArray,headsArray):
    return [[wordsArray[i],i] for i in range(len(wordsArray)) if headsArray[i]==index]



def main(argv):
    text=""
    shouldPrint=False
    try:
        opts, args = getopt.getopt(argv,"t:p",["text=", "print"])
    except getopt.GetoptError:
        print 'NLP.py -t "text" [-p]'
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-t", "--text"):
            text=arg
        elif opt in ("-p", "--print"):
            shouldPrint = True
    text.replace("covid", "coronavirus")
    text.replace("covid19", "coronavirus")
    text.replace("covid-19", "coronavirus")
    entitiesArray=[]
    wordsArray=[]
    headsArray=[]
    typesArray=[]
    analyze_entities(text, entitiesArray)
    analyze_syntax(text,wordsArray,headsArray,typesArray)
    tags=[]
    for word in entitiesArray:
        verb=getParentVerb(word, wordsArray,headsArray,typesArray)
        childWords=getChildrenWords(word, wordsArray,headsArray, typesArray)
        tags.append((word, verb, childWords))
    for tag in tags:
	#Crides a funcions aqui
        if shouldPrint:
            print("<"+str(tag[0])+","+ str(tag[1])+","+str(tag[2])+">")
        
if __name__ == "__main__":
   main(sys.argv[1:])