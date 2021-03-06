import React, { useState, useEffect } from "react";
import { Typography, Card, Container, CardContent } from "@mui/material";

function HighScores({ highScoreData }) {
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(false)
    }, [])


    return (
        isLoading ? <Typography variant="h1"> Loading.....</Typography> :
            <Container>
                <Typography variant="h1">High Scores</Typography>
                {highScoreData.map(highScoreCategory =>
                    <Card key={highScoreCategory.category}>
                        <CardContent>
                            <Typography variant="h3">{highScoreCategory.category}</Typography>
                            {highScoreCategory.scores.map(scores =>
                                <Typography variant="h5" key={scores.id}>{scores.initals} .......... {scores.score}</Typography>
                            )}
                        </CardContent>

                    </Card>
                )}
            </Container>
    )
}

export default HighScores
