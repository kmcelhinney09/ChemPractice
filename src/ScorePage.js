import React from "react";
import {  Card, Container, CardContent, Button } from "@mui/material";

function ScorePage({ score, total }) {
    return (
        <Container>
            <Card>
                <CardContent>
                    <h1>Your score is {score} out of {total}</h1>
                    <h1>That is {(score / total) * 100}%</h1>
                </CardContent>
                <Button variant="contained">Home</Button>
                <Button variant="contained">High Scores</Button>
            </Card>
        </Container>

    )
}

export default ScorePage