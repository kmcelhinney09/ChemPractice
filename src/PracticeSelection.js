import React from "react";
import { Typography, Card, CardActionArea, Container, CardContent, CardMedia, Grid } from "@mui/material";
import useStyles from "./styles";
import bondType from './data/images/bondType.png'
import metalNonmetal from './data/images/Metal-NonIcon.png'

function PracticeSelection() {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h3" align="center" gutterBottom>Practice Selection</Typography>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4} >
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
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
                    </Grid>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardActionArea>
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
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PracticeSelection;