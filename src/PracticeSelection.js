import React from "react";
import { Link } from "react-router-dom"
import { Typography, Card, CardActionArea, Container, CardContent, CardMedia, Grid } from "@mui/material";
import useStyles from "./styles";
import bondType from './data/images/bondType.png'
import metalNonmetal from './data/images/Metal-NonIcon.png'
import Electronegativity from './data/images/Electronegativity_Icon.png'

function PracticeSelection({ questionSettings, setQuestionSettings }) {
    const classes = useStyles();

    function handleQuestionSelection(questionTypeSelection) {
        const newSettings = { ...questionSettings, questionType: questionTypeSelection }
        setQuestionSettings(newSettings)
    }

    return (
        <>
            <Typography variant="h3" align="center" gutterBottom>Practice Selection</Typography>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/PracticeSettings" style={{ textDecoration: 'none' }}>
                            <Card className={classes.card}>
                                <CardActionArea onClick={() => handleQuestionSelection("predictBond")}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={bondType}
                                        title="Bond Type Practice"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Bond Type Practice
                                        </Typography>
                                        <Typography>
                                            In this section you will be asked to predict the chemical bond type based on electronegativity difference
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/PracticeSettings" style={{ textDecoration: 'none' }}>
                            <Card className={classes.card}>
                                <CardActionArea onClick={() => handleQuestionSelection("metalNonMetal")}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={metalNonmetal}
                                        title="Element Bonding Group Practice"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Element Bonding Group Practice
                                        </Typography>
                                        <Typography>
                                            In this section you will be asked to determin if an element is a metal, nonmetal, or metaloid
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Link to="/PracticeSettings" style={{ textDecoration: 'none' }}>
                            <Card className={classes.card}>
                                <CardActionArea onClick={() => handleQuestionSelection("electronegativityDifference")}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={Electronegativity}
                                        title="Electronegativity Difference"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Electronegativity Difference
                                        </Typography>
                                        <Typography>
                                            In this section you will be asked to calculate electronegativity difference between two elements
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PracticeSelection;