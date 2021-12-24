import React, { useState, useEffect } from "react";
import { Typography, Slider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Button } from "@mui/material";
import { useHistory } from "react-router-dom";

function PracticeSettings({ questionSettings, setQuestionSettings }) {
    const [formData, setformData] = useState({
        numberOfQuestions: 0,
        elementLabelStyle: "name"
    })

    const marks = [
        {
            value: 0,
            label: "0"
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
                            track={false}
                            defaultValue={formData.numberOfQuestions}
                            marks={marks}
                            step={null}
                            max={20}
                            valueLabelDisplay="auto"
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Element Label Type</FormLabel>
                            <RadioGroup
                                row
                                name="elementLabelStyle"
                                value={formData.elementLabelStyle}
                                onChange={handleOnChange}
                            >
                                <FormControlLabel value="name" control={<Radio />} label="Full name" />
                                <FormControlLabel value="symbol" control={<Radio />} label="Element Symbol" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Button varient="contained" type="submit">Save Settings</Button>
                </Grid>
            </form>

        </>
    )
}

export default PracticeSettings