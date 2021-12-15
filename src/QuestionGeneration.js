import React, { useState, useEffect } from "react";


function QuestionGeneration() {
//     const [elements, setElements] = useState([])

//     const questionSettings = {
//         "numberOfQuestions": 5,
//         "quesionType": "electronegativityDifference",
//         "questionStem": "What is the electronegatiity difference between {name} and {name}?",
//         "numberOfElements": 2,
//         "answerOptions": []
//     }


//     useEffect(() => {
//         fetch("http://localhost:6001/elements")
//             .then(res => res.json())
//             .then(elementsData => {
//                 setElements(elementsData);
//             })
//             .then( elementData => {
                
//                 function getRandomElement(numberOfElements, numberOfQuestions) {
//                     const elementsArray = [];
//                     const elementIdArray = [];
//                     const numberOfElementsNeeded = numberOfElements * numberOfQuestions
//                     for (let i = 0; i < numberOfElementsNeeded; i++) {
//                         const randomElementId = Math.floor(Math.random() * 94)
//                         elements.forEach(elementData => {
//                             if (parseInt(elementData.id) === randomElementId) {
//                                 if (elementIdArray.includes(elementData.id)) {
//                                     i--
//                                 } else {
//                                     elementsArray.push(elementData)
//                                     elementIdArray.push(elementData.id)
//                                 }
//                             }
//                         })
//                     }
//                     return elementsArray
//                 }
            
//                 function bondPrediction(elementsUsed) {
//                     const elementOne = elementsUsed[0].electroNegativity === '' ? 0 : elementsUsed[0].electroNegativity
//                     const elementTwo = elementsUsed[1].electroNegativity === '' ? 0 : elementsUsed[1].electroNegativity
//                     if (Math.abs(elementOne - elementTwo) >= 1.7) {
//                         return "ionic"
//                     } else if (Math.abs(elementOne - elementTwo) >= 0.4) {
//                         return "non-polar covalent"
//                     } else {
//                         return "polar covalent"
//                     }
//                 }
//                 function electroNegativityDifference(elementsUsed) {
//                     const elementOne = elementsUsed[0].electroNegativity === '' ? 0 : elementsUsed[0].electroNegativity
//                     const elementTwo = elementsUsed[1].electroNegativity === '' ? 0 : elementsUsed[1].electroNegativity
//                     return (Math.abs(elementOne - elementTwo)).toFixed(2)
//                 }
//                     const generatedQuestions = []
//                     const elementsDataArray = getRandomElement(questionSettings.numberOfElements, questionSettings.numberOfQuestions)
//                     let randomElementFromArray;
//                     let answerChoices = questionSettings.answerOptions
//                     let correctAnswer
//                     let questionToRender
//                     const questionParts = questionSettings.questionStem.split(" ")
            
//                     for (var i = 0; i < questionSettings.numberOfQuestions; i++) {
//                         let elementsUsed = [];
//                         questionToRender = questionParts.map(part => {
//                             if (part.includes("{")) {
//                                 const dynamicData = part.slice(1, -1)
//                                 randomElementFromArray = Math.floor(Math.random() * elementsDataArray.length)
//                                 const elementForQuesiton = elementsDataArray[randomElementFromArray]
//                                 elementsUsed.push(elementForQuesiton)
//                                 return elementForQuesiton[dynamicData]
//                             } else {
//                                 return part
//                             }
//                         }).join(" ")
//                         if (questionSettings.quesionType === "metalNonMetal") {
//                             correctAnswer = elementsDataArray[randomElementFromArray]["propertiesBlock"]
//                         } else if (questionSettings.quesionType === "predictBond") {
//                             correctAnswer = bondPrediction(elementsUsed)
//                         } else {
//                             correctAnswer = electroNegativityDifference(elementsUsed)
//                             answerChoices = [correctAnswer]
//                             for (let i = 0; i < 3; i++) {
//                                 const wrongAnswer = electroNegativityDifference([elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)], elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)]])
//                                 if (wrongAnswer === correctAnswer || answerChoices.includes(wrongAnswer)) {
//                                     i--
//                                 }
//                                 else {
//                                     answerChoices.push(wrongAnswer)
//                                 }
//                             }
//                         }
//                         generatedQuestions.push({
//                             "question": questionToRender,
//                             "correctAnswer": correctAnswer,
//                             "answerChoices": answerChoices
//                         })
//                     }
//                     console.log(generatedQuestions)
//                     setQuestionData(generatedQuestions)
//                 })
//     }, [])

    
    return <h1>Question Generation</h1>
}

export default QuestionGeneration;

