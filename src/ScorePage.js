import React, { useState, useEffect } from "react";
import { Card, Container, CardContent, Button, Typography, TextField, Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

function ScorePage({ playerScore, total, highScoreData, questionType, setReloadHighScore }) {
    const [highScoreUpdate, setHighScoreUpdate] = useState(false)
    const [highScoreInitals, setHighScoreInitals] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory();
    let  questionCategoryID, oldHighScores, highScoreID

    useEffect(() => {
        highScoreQualification()
    }, [highScoreInitals])

    function highScoreQualification() {
        let questionCategory, highScoreDataCopy, scoreId;

        if (questionType === 'metalNonMetal') {
            questionCategory = 'Bond Type'
            questionCategoryID = 1
        } else if (questionType === 'predictBond') {
            questionCategory = 'Bond Prediction'
            questionCategoryID = 2
        } else if (questionType === 'electronegativityDifference') {
            questionCategory = 'Electronegativity Difference'
            questionCategoryID = 3
        }
        
        highScoreData.forEach(highScoreDataArray => {
            if (highScoreDataArray.category === questionCategory) {
                highScoreDataCopy = {...highScoreDataArray}
                highScoreDataCopy.scores.every(oldScore => {
                    if(oldScore.score < playerScore){
                        scoreId = oldScore.id
                        setHighScoreUpdate(true)
                        return false
                    }else{
                        return true
                    }
                })
            }
        })
        oldHighScores = highScoreDataCopy
        highScoreID = scoreId
        setIsLoading(false)
    }

    function handleClick() {
        setReloadHighScore(true)
        history.push("/HighScore")
    }

    function creatScorePatchBody() {
        let newScores = [...oldHighScores.scores]
        newScores.splice((highScoreID -1),0,{id:highScoreID, initals:highScoreInitals, score:playerScore})
        newScores.pop()
        newScores = newScores.map((scores, index) => {
                return{...scores, id:index+1}            
        })
        
        return {...oldHighScores, scores: newScores}
    }

    function handleSubmit(e) {
        e.preventDefault()
        const patchURI = `http://localhost:6001/highscores/${questionCategoryID}`
        const newBody = creatScorePatchBody()

        fetch(patchURI,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newBody)
        })
        .then(res => res.json())
        .then(updatedItem => handleClick())
    }

    return (
        isLoading ? null :
        <Container>
            <Card>
                <CardContent>
                    <Typography variant="h4">Your score is {playerScore} out of {total}</Typography>
                    <Typography variant="h4">That is {((playerScore / total) * 100).toFixed(2)}%</Typography>
                </CardContent>
            </Card>
            {highScoreUpdate ? <Card>
                <CardContent>
                    <Typography variant="h4">Congradulations! You have made the High Score Roster!</Typography>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container alignItems="left" direction="column">
                            <Grid item>
                                <TextField
                                    label="Initals"
                                    color="secondary"
                                    required
                                    value={highScoreInitals}
                                    onChange={(e) => setHighScoreInitals(e.target.value)}
                                    inputProps={{maxLength:3}}
                                    helperText={`Character limit is 3 : ${highScoreInitals.length}/3`}
                                />
                            </Grid>
                            <Grid item>
                                <Button varient="outlined" type="submit" color="secondary">Submit High Score</Button>
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