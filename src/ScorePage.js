import React, { useState, useEffect } from "react";
import { Card, Container, CardContent, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function ScorePage({ score, total, highScoreData, questionType }) {
    const history = useHistory();
    let highScoreID = 0;
    let questionCatagory; 

    useEffect(() => {
        highScoreQualification()
    }, [])

    function highScoreQualification() {
        if (questionType === 'metalNonMetal') {
            questionCatagory = 'Bond Type'
        } else if (questionType === 'predictBond') {
            questionCatagory = 'Bond Prediction'
        } else if (questionType === 'electronegativityDifference') {
            questionCatagory = 'Electronegativity Difference'
        }
        highScoreData.forEach(highScores => {
            if (highScores.category === questionCatagory) {
                highScores.scores.every(scoreData => {
                    if(scoreData.score < score){
                        highScoreID = scoreData.id
                        return false
                    }else{
                        return true
                    }
                })
            }
        })
        console.log(highScoreID)
    }

    function handleClick() {
        history.push("/HighScore")
    }

    return (
        <Container>
            <Card>
                <CardContent>
                    <h1>Your score is {score} out of {total}</h1>
                    <h1>That is {(score / total) * 100}%</h1>
                </CardContent>
                <Button variant="contained" onClick={handleClick}>High Scores</Button>
            </Card>
        </Container>

    )
}

export default ScorePage