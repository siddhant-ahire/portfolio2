import React from 'react'
import Navbar from './Navbar'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Project1 from "../images/html-css-javascript-lg.jpg"

const useStyles = makeStyles({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"5rem auto"
    }
})
const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.mainContainer}>
                <Navbar/>
                <Grid container justify="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={Project1}
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Project 1
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Commodo aute exercitation do deserunt. Magna amet consectetur elit ad laborum excepteur in non esse non. Anim dolore adipisicing aute qui velit ea eiusmod sit ipsum cupidatat eiusmod. Esse occaecat dolore non proident irure exercitation Lorem ullamco ad dolore labore et.
                                        </Typography>
                                    </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={Project1}
                                />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5">
                                            Project 1
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Commodo aute exercitation do deserunt. Magna amet consectetur elit ad laborum excepteur in non esse non. Anim dolore adipisicing aute qui velit ea eiusmod sit ipsum cupidatat eiusmod. Esse occaecat dolore non proident irure exercitation Lorem ullamco ad dolore labore et.
                                        </Typography>
                                    </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}

export default Portfolio
