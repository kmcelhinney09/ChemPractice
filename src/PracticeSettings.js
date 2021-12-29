import React, { useState, useEffect } from "react";
import { Typography, Slider, Grid, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function PracticeSettings({ questionSettings, setQuestionSettings }) {
    const [formData, setformData] = useState({
        numberOfQuestions: 1,
        elementLabelStyle: "name"
    })

    const marks = [
        {
            value: 1,
            label: "1"
        },
        {
            value: 5,
            label: "5"
        },
        {
            value: 10,
            label: "10"
        },
        {
            value: 15,
            label: "15"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 25,
            label: "25"
        },
        {
            value: 30,
            label: "30"
        },
        {
            value: 35,
            label: "35"
        },
        {
            value: 40,
            label: "40"
        },
        {
            value: 45,
            label: "45"
        },
        {
            value: 50,
            label: "50"
        },
        {
            value: 55,
            label: "55"
        },
        {
            value: 60,
            label: "60"
        },
        {
            value: 65,
            label: "65"
        },
        {
            value: 70,
            label: "70"
        },
        {
            value: 75,
            label: "75"
        },
        {
            value: 80,
            label: "80"
        },
        {
            value: 85,
            label: "85"
        },
        {
            value: 90,
            label: "90"
        },
        {
            value: 95,
            label: "95"
        },
        {
            value: 100,
            label: "100"
        }
    ]
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:6001/questionData")
            .then(res => res.json())
            .then(questionDataArray => {
                questionDataArray.forEach(questionData => {
                    if (questionData.questionType === questionSettings.questionType) {
                        const newSettings = {...questionSettings, numberOfElements:questionData.numberOfElements, questionStem: questionData.questionStem, answerChoices:questionData.answerChoices}
                        setQuestionSettings(newSettings)
                    }
                })
            })
    },[])
    function handleOnChange(e) {
        const name = e.target.name
        const value = e.target.value

        setformData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newSettings = {...questionSettings, numberOfQuestions:formData.numberOfQuestions}
        setQuestionSettings(newSettings)
        history.push("/Quiz")
    }

    return (
        <>
            <h1>Practice Settings</h1>
            <Typography gutterBottom>
                Number of Questions
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container alignItems="left" direction="column">
                    <Grid item>
                        <Slider
                            name="numberOfQuestions"
                            color="secondary"
                            track={false}
                            value={formData.numberOfQuestions}
                            marks={marks}
                            step={1}
                            max={100}
                            valueLabelDisplay="auto"
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Button varient="contained" type="submit">Save Settings</Button>
                </Grid>
            </form>

        </>
    )
}

export default PracticeSettings