def answers(tags, tags_questions):
    probabilities=[]
    for i in tag_questions:
        probability=0
        for j in i:
            for t in tags:
                if j[0]==t[0] and j[1]==t[1]:
                    probability+=2
                elif j[0]==t[0]:
                    probability+=1
        probability=probability/(len(i)*2)
        probabilities.append(probability)
    print(probabilities)



tag_questions=[[["symptoms", "are"], ["signs", "are"]], [["phase1", "are"], ["city", "are"], ["town", "are"], ["zone", "are"], ["province", "are"], ["area", "are"], ["location", "are"]], [["phase0", "are"], ["city", "are"], ["town", "are"], ["zone", "are"], ["province", "are"], ["area", "are"], ["location", "are"]], [["packages", "work"], ["packages", "function"]], [["services", "are"], ["open", "are"], ["services", "working"], ["open", "working"]], [["second residence", "go"], ["second residence", "travel"], ["second residence", "move"]], [["activities", "do"], ["outside", "do"], ["outside", "exercise"]], [["intervals", "are"], ["periods", "are"]], [["public transport", "are"], ["public transport", "take"]], [["funeral", "assist"], ["funeral", "go"], ["people", "assist"], ["people", "go"]], [["changes", "are"], ["actualizations", "are"], ["confinement", "change"]]]
answers=[]

answers([["symptoms", "are"], ["outside", "go"]], tag_questions)