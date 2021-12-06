import React, { useState } from "react";
import { Typography, Slider, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Button } from "@mui/material";

function PracticeSettings() {
    const [questionSettings, setQuestionSettings] = useState({
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

    function handleOnChange(e) {
        const name = e.target.name
        const value = e.target.value

        setQuestionSettings({
            ...questionSettings,
            [name]: value,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(questionSettings)
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
                            defaultValue={questionSettings.numberOfQuestions}
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
                                value={questionSettings.elementLabelStyle}
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

export default PracticeSettings;