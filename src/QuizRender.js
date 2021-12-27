import React, { useState, useEffect } from "react";
import QuestionCardGenerator from "./QuestionCardGenerator";
import ScorePage from "./ScorePage";

function QuizRender({ questionSettings, highScoreData, setReloadHighScore }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([])

    const [isLoading, setIsLoading] = useState(true)


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

    useEffect(() => {
        fetch("http://localhost:6001/elements")
            .then(res => res.json())
            .then(elementData => {
                const generatedQuestions = []
                const elementsDataArray = getRandomElement(questionSettings.numberOfElements, questionSettings.numberOfQuestions, elementData)
                let answerChoiceOptionsData = questionSettings.answerChoices;
                let answerChoiceOptions;
                let questionToRender;
                const questionParts = questionSettings.questionStem.split(" ")

                for (var i = 0; i < questionSettings.numberOfQuestions; i++) {
                    let elementsUsed = [];
                    let questionElementNumber = 0;
                    questionToRender = questionParts.map(part => {
                        let dynamicData;
                        let hasQuestionMark = false;
                        if (part.includes("{")) {
                            if (part.includes("?")) {
                                dynamicData = part.slice(1, -2)
                                hasQuestionMark = true;
                            } else {
                                dynamicData = part.slice(1, -1)
                            }

                            const elementForQuesiton = elementsDataArray[i + questionElementNumber]
                            elementsUsed.push(elementForQuesiton)
                            if (questionSettings.numberOfElements > 1) {
                                questionElementNumber += 1
                            }
                            if (hasQuestionMark) {
                                return `${elementForQuesiton[dynamicData]}?`
                            } else {
                                return elementForQuesiton[dynamicData]
                            }

                        } else {
                            return part
                        }
                    }).join(" ")
                    if (questionSettings.questionType === "metalNonMetal") {
                        const correctAnswer = elementsDataArray[i + questionElementNumber]["propertiesBlock"]
                        answerChoiceOptions = answerChoiceOptionsData.map(answerChoice => {
                            if (answerChoice.answerText === correctAnswer) {
                                return { ...answerChoice, isCorrect: true }
                            }
                            return answerChoice
                        })

                    } else if (questionSettings.questionType === "predictBond") {
                        const correctAnswer = bondPrediction(elementsUsed)
                        answerChoiceOptions = answerChoiceOptionsData.map(answerChoice => {
                            if (answerChoice.answerText === correctAnswer) {
                                return { ...answerChoice, isCorrect: true }
                            }
                            return answerChoice
                        })
                    } else if (questionSettings.questionType === "electronegativityDifference") {
                        const correctAnswer = electroNegativityDifference(elementsUsed)
                        const correctOption = { answerText: correctAnswer, isCorrect: true }
                        answerChoiceOptions = []
                        for (let i = 0; i < 3; i++) {
                            const wrongAnswer = electroNegativityDifference([elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)], elementsDataArray[Math.floor(Math.random() * elementsDataArray.length)]])
                            if (wrongAnswer === correctAnswer || answerChoiceOptionsData.includes(wrongAnswer)) {
                                i--
                            }
                            else {
                                answerChoiceOptions.push({ answerText: wrongAnswer, isCorrect: false })
                            }
                        }
                        const correctAnswerPlace = Math.floor(Math.random() * 3)
                        answerChoiceOptions.splice(correctAnswerPlace, 0, correctOption)
                    }
                    generatedQuestions.push({
                        question: questionToRender,
                        answerChoices: answerChoiceOptions
                    })
                }
                setQuestions(generatedQuestions);
                setIsLoading(false)
            })
    }, [questionSettings])

    return (
        isLoading ? <h1>Loading.......</h1> :
            showScore ? <ScorePage
                playerScore={score}
                total={questions.length}
                highScoreData={highScoreData}
                questionType={questionSettings.questionType}
                setReloadHighScore={setReloadHighScore}
            /> :
                <div>
                    <h4>{`Question ${currentQuestion + 1}/ ${questions.length}`} </h4>
                    <QuestionCardGenerator
                        setShowScore={setShowScore}
                        setScore={setScore}
                        score={score}
                        quizSize={questions.length}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        question={questions[currentQuestion].question}
                        answerChoices={questions[currentQuestion].answerChoices}
                    />
                </div>

    )
}

export default QuizRender;

