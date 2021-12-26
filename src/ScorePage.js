import React, { useState, useEffect } from "react";
import { Card, Container, CardContent, Button, Typography, TextField, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

function ScorePage({ score, total, highScoreData, questionType }) {
    const history = useHistory();
    let highScoreID = 0;
    let questionCatagory;
    let questionCatagoryID = 0;
    const [highScoreUpdate, setHighScoreUpdate] = useState(false)
    const [highScoreInitals, setHighScoreInitals] = useState('')

    useEffect(() => {
        highScoreQualification()
    }, [])

    function highScoreQualification() {
        if (questionType === 'metalNonMetal') {
            questionCatagory = 'Bond Type'
            questionCatagoryID = 1
        } else if (questionType === 'predictBond') {
            questionCatagory = 'Bond Prediction'
            questionCatagoryID = 2
        } else if (questionType === 'electronegativityDifference') {
            questionCatagory = 'Electronegativity Difference'
            questionCatagoryID = 3
        }

        highScoreData.forEach(highScores => {
            if (highScores.category === questionCatagory) {
                highScores.scores.every(scoreData => {
                    if (scoreData.score < score) {
                        highScoreID = scoreData.id
                        setHighScoreUpdate(true)
                        return false
                    } else {
                        return true
                    }
                })
            }
        })
    }

    function handleClick() {
        history.push("/HighScore")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(highScoreInitals)
    }

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h4">Your score is {score} out of {total}</Typography>
                    <Typography variant="h4">That is {(score / total) * 100}%</Typography>
                </CardContent>
            </Card>
            {highScoreUpdate ? <Card>
                <CardContent>
                    <Typography variant="h4">Congradulations You have made the High Score Roster!</Typography>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container alignItems="left" direction="column">
                            <Grid item>
                                <TextField
                                    variant="outlined"
                                    label="Initals"
                                    required
                                    defaultValue={highScoreInitals}
                                    onChange={(e) => setHighScoreInitals(e.target.value)}
                                />
                            </Grid>
                            <Grid item>
                                <Button varient="contained" type="submit">Submit Initals</Button>
                            </Grid>
                        </Grid>


                    </form>
                </CardContent>
            </Card> : null}
            <Button variant="contained" onClick={handleClick}>High Scores</Button>
        </Container>
    )
}

export default ScorePage