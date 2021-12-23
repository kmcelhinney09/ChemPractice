import React from "react";
import { Typography, Card, Container, CardContent, Button } from "@mui/material";
import { v4 as uuidv4 } from 'uuid'

function QuestionCardGenerator({ setShowScore, setScore, score, quizSize, currentQuestion, setCurrentQuestion, question, answerChoices }) {
    function handleAnswerClick(isCorrect) {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizSize) {
            setCurrentQuestion(nextQuestion)
        }else(
            setShowScore(true)
        )
        if(isCorrect){
            const newScore = score + 1
            setScore(newScore)
        }

    }
    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {question}
                    </Typography>
                    {answerChoices.map(choice =>
                        <Button key={uuidv4()} onClick={(e) => { handleAnswerClick(choice.isCorrect) }} variant="contained">{choice.answerText}</Button>
                    )}
                </CardContent>
            </Card>
        </Container>
    )
}

export default QuestionCardGenerator