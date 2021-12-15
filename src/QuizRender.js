import React, { useState } from "react";
import QuestionCardGenerator from "./QuestionCardGenerator";
import ScorePage from "./ScorePage";
// import { v4 as uuidv4 } from 'uuid'

function QuestionCards() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)
    const questions = [
        {
            question: "Is hydrogen a metal, metalloid, or nonmetal?",
            answerChoices: [
                { answerText: "metal", isCorrect: false },
                { answerText: "metalloid", isCorrect: false },
                { answerText: "nonmetal", isCorrect: true }
            ]
        },
        {
            question: "Is oxygen a metal, metalloid, or nonmetal?",
            answerChoices: [
                { answerText: "metal", isCorrect: false },
                { answerText: "metalloid", isCorrect: false },
                { answerText: "nonmetal", isCorrect: true }
            ]
        },
        {
            question: "Is gold a metal, metalloid, or nonmetal?",
            answerChoices: [
                { answerText: "metal", isCorrect: true },
                { answerText: "metalloid", isCorrect: false },
                { answerText: "nonmetal", isCorrect: false }
            ]
        },
        {
            question: "Is iron a metal, metalloid, or nonmetal?",
            answerChoices: [
                { answerText: "metal", isCorrect: true },
                { answerText: "metalloid", isCorrect: false },
                { answerText: "nonmetal", isCorrect: false }
            ]
        },
        {
            question: "Is silicon a metal, metalloid, or nonmetal?",
            answerChoices: [
                { answerText: "metal", isCorrect: false },
                { answerText: "metalloid", isCorrect: true },
                { answerText: "nonmetal", isCorrect: false }
            ]
        },

    ]
    return (
        showScore ? <ScorePage score={score} total={questions.length}/> :
            <div>
                <h4>{`Question ${currentQuestion + 1}/ ${questions.length}`} </h4>

                <QuestionCardGenerator
                    setShowScore={setShowScore}
                    setScore={setScore}
                    score={score}
                    quizSize={questions.length}
                    currentQuestion={currentQuestion}
                    setQuestion={setCurrentQuestion}
                    quesiton={questions[currentQuestion].question}
                    answerChoices={questions[currentQuestion].answerChoices}
                />
            </div>

    )
}

export default QuestionCards;