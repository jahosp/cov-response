import sys

def get_questions():
    tag_questions = [[(["symptoms", "are"], 0.75), (["signs", "are"], 0.25)],
                     [(["phase1", "are"], 0.70), (["city", "are"], 0.05), (["town", "are"], 0.05),
                      (["zone", "are"], 0.05), (["province", "are"], 0.05), (["area", "are"], 0.05),
                      (["location", "are"], 0.05)],
                     [(["phase0", "are"], 0.7), (["city", "are"], 0.05), (["town", "are"], 0.05),
                      (["zone", "are"], 0.05), (["province", "are"], 0.05), (["area", "are"], 0.05),
                      (["location", "are"], 0.05)], [(["packages", "work"], 0.5), (["packages", "function"], 0.5)],
                     [(["services", "are"], 0.2), (["open", "are"], 0.3), (["services", "working"], 0.2),
                      (["open", "working"], 0.3)],
                     [(["second residence", "go"], 1 / 3), (["second residence", "travel"], 1 / 3),
                      (["second residence", "move"], 1 / 3)],
                     [(["activities", "do"], 0.25), (["outside", "do"], 0.25), (["outside", "exercise"], 0.5)],
                     [(["intervals", "are"], 0.5), (["periods", "are"], 0.5)],
                     [(["public transport", "are"], 0.5), (["public transport", "take"], 0.5)],
                     [(["funeral", "assist"], 0.4), (["funeral", "go"], 0.4), (["people", "assist"], 0.1),
                      (["people", "go"], 0.1)],
                     [(["changes", "are"], 0.4), (["actualizations", "are"], 0.4), (["confinement", "change"], 0.2)]]
    return tag_questions

def answers(tags, tags_questions):
    probabilities=[]
    for i in tag_questions:
        probability=0
        for j in i:
            for t in tags:
                if j[0][0]==t[0] and j[0][1]==t[1]:
                    probability+=j[1]*2
                elif j[0][0]==t[0]:
                    probability+=j[1]
        probability=probability/(len(i)*2)
        probabilities.append(probability)
    print(probabilities)


if __name__ == "__main__":
    tag_questions=get_questions()
    answers(sys.argv[1:], tag_questions)
    sys.stdout.flush()
