import React, { useState, useEffect } from "react";
import { Typography, Card, Container, CardContent } from "@mui/material";

function HighScores() {
    const [highScoreData, setHighScoreData] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("http://localhost:6001/highscores")
            .then(res => res.json())
            .then(highScoreDBData => {
                const highScoreCatagorize = Object.entries(highScoreDBData[0])
                setHighScoreData(highScoreCatagorize)
                setIsLoading(false)

            })
    }, [])


    return (
        isLoading ? <Typography variant="h1"> Loading.....</Typography> :
            <Container>
                <Typography variant="h1">High Scores</Typography>
                {highScoreData.map(category =>
                    <Card key={category[0]}>
                        <CardContent>
                            <Typography variant="h3">{category[0]}</Typography>
                                {category[1].map(scores =>
                                    <Typography variant="h5" key={scores.id}>{scores.initals} .......... {scores.score}</Typography>
                                )}
                        </CardContent>

                    </Card>
                )}
            </Container>
    )
}

export default HighScores
