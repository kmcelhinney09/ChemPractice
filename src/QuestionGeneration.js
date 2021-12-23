import React, { useState, useEffect } from "react";


function QuestionGeneration({ questionSettings, questionReturn }) {
    const [questions, setQuestions] = useState([])

       useEffect(() => {
        const questionSettings = {
            "numberOfQuestions": 5,
            "quesionType": "electronegativityDifference",
            "questionStem": "What is the electronegatiity difference between {name} and {name}?",
            "numberOfElements": 2,
            "answerChoices": []
        }

        fetch("http://localhost:6001/elements")
            .then(res => res.json())
            .then(elementData => {
                const generatedQuestions = []
                const elementsDataArray = getRandomElement(questionSettings.numberOfElements, questionSettings.numberOfQuestions, elementData)
                let answerChoices = questionSettings.answerChoices
                let correctAnswer
                let questionToRender
                const questionParts = questionSettings.questionStem.split(" ")

                for (var i = 0; i < questionSettings.numberOfQuestions; i++) {
                    let elementsUsed = [];
                    let questionElementNumber = 0;
                    questionToRender = questionParts.map(part => {
                        let dynamicData;
                        let hasQuestionMark = false;
                        if (part.includes("{")) {
                            if(part.includes("?")){
                                dynamicData = part.slice(1, -2)
                                hasQuestionMark = true;
                            }else{
                                dynamicData = part.slice(1, -1)
                            }
                            
                            const elementForQuesiton = elementsDataArray[i + questionElementNumber]
                            elementsUsed.push(elementForQuesiton)
                            if (questionSettings.numberOfElements > 1){
                                questionElementNumber += 1
                            }
                            if (hasQuestionMark){
                                return `${elementForQuesiton[dynamicData]}?`
                            }else{
                                return elementForQuesiton[dynamicData]
                            }
                            
                        } else {
                            return part
                        }
                    }).join(" ")
                    if (questionSettings.quesionType === "metalNonMetal") {
                        correctAnswer = elementsDataArray[i + questionElementNumber]["propertiesBlock"]
                    } else if (questionSettings.quesionType === "predictBond") {
                        correctAnswer = bondPrediction(elementsUsed)
                    } else {
                        correctAnswer = electroNegativityDifference(elementsUsed)
                        answerChoices = [correctAnswer]
                        for (let i = 0; i < 3; i++) {
                            const wrongAnswer = electroNegativityDifference([elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)], elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)]])
                            if (wrongAnswer === correctAnswer || answerChoices.includes(wrongAnswer)) {
                                i--
                            }
                            else {
                                answerChoices.push(wrongAnswer)
                            }
                        }
                    }
                    generatedQuestions.push({
                        "question": questionToRender,
                        "correctAnswer": correctAnswer,
                        "answerChoices": answerChoices
                    })
                }
                setQuestions(generatedQuestions)
            })
    }, [])


    return (
        <div>
            <h1>Question Generation</h1>
            {console.log(questions)}
        </div>

    )
}

function getRandomElement(numberOfElements, numberOfQuestions, elementData) {
    const elementsArray = [];
    const elementIdArray = [];
    const numberOfElementsNeeded = numberOfElements * numberOfQuestions
    for (let i = 0; i < numberOfElementsNeeded; i++) {
        const randomElementId = Math.floor(Math.random() * 94)
        elementData.forEach(elements => {
            if (parseInt(elements.id) === randomElementId) {
                if (elementIdArray.includes(elements.id)) {
                    i--
                } else {
                    elementsArray.push(elements)
                    elementIdArray.push(elements.id)
                }
            }
        })
    }
    return elementsArray
}

function bondPrediction(elementsUsed) {
    const elementOne = elementsUsed[0].electroNegativity === '' ? 0 : elementsUsed[0].electroNegativity
    const elementTwo = elementsUsed[1].electroNegativity === '' ? 0 : elementsUsed[1].electroNegativity
    if (Math.abs(elementOne - elementTwo) >= 1.7) {
        return "ionic"
    } else if (Math.abs(elementOne - elementTwo) >= 0.4) {
        return "non-polar covalent"
    } else {
        return "polar covalent"
    }
}

function electroNegativityDifference(elementsUsed) {
    const elementOne = elementsUsed[0].electroNegativity === '' ? 0 : elementsUsed[0].electroNegativity
    const elementTwo = elementsUsed[1].electroNegativity === '' ? 0 : elementsUsed[1].electroNegativity
    return (Math.abs(elementOne - elementTwo)).toFixed(2)
}

export default QuestionGeneration;

