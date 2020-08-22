import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${'/images/testimonials-background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100%',
        height: 'auto',
        marginTop: '200px',
        marginBottom: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '100px',
        paddingLeft: '100px',
        paddingTop: '7.5rem',
        paddingBottom: '7.5rem',
        justifyContent: 'space-around',
    },
    leftContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    img: {
        width: '550px'
    },
    rightContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
        textAlign: 'center',
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        marginBottom: '2.5rem'
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        backgroundColor: 'transparent',
        textAlign: 'left',
        marginBottom: '15px',
    },
    testimonial: {
        width: '7rem',
        height: '7rem',
        marginRight: '20px',
        borderRadius: '50%',
    },
    testimonialText: {
        color: '#626262',
        font: 'italic 400 1rem/1.5rem "Raleway", sans-serif',
        marginBottom: '1rem'
    },
    testimonialAuthor: {
        color: '#626262',
        font: '700 1rem/1.5rem "Raleway", sans-serif'
    }
}));



function Testimonials() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <img className={classes.img} src="/images/testimonials-2-men-talking.svg" alt="Men Talking" />
                </div>
                <div className={classes.rightContainer}>
                    <Typography className={classes.title} variant="h2">Testimonials</Typography>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img className={classes.testimonial} alt="complex" src="/images/testimonial-1.svg" />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography className={classes.testimonialText} variant="body1">
                                            I just finished my trial period and was so amazed with the support and results that I purchased Evolo right away at the special price.
                                        </Typography>
                                        <Typography className={classes.testimonialAuthor} variant="body1">Jude Thorn - Designer</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img className={classes.testimonial} src="/images/testimonial-2.svg" alt="testimonial" />                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography className={classes.testimonialText} variant="body1">
                                            Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!
                                        </Typography>
                                        <Typography className={classes.testimonialAuthor} variant="body1">Jude Thorn - Designer</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <img className={classes.testimonial} alt="complex" src="/images/testimonial-3.svg" />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography className={classes.testimonialText} variant="body1">
                                            Love their services and was so amazed with the support and results that I purchased Evolo for two years in a row. They are awesome.
                                        </Typography>
                                        <Typography className={classes.testimonialAuthor} variant="body1">Roy Smith - Marketer</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;