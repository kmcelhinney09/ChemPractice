import React from "react";
import {  Card, Container, CardContent, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function ScorePage({ score, total }) {
    const history = useHistory();

    function handleClick(){
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