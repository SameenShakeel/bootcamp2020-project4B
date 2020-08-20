import React from 'react';
import { Typography, Paper, IconButton, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
        textAlign: 'center'
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif'
    },
    btn: {
        backgroundColor: 'transparent',
        color: 'black',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    testimonial: {
        width: '7rem',
        height: '7rem',
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

    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <img className={classes.testimonial}src="/images/testimonial-1.svg" alt="testimonial" />
                        <Typography className={classes.testimonialText} variant="body1">
                            I just finished my trial period and was so amazed with the support and results that I purchased Evolo right away at the special price.
                        </Typography>
                        <Typography className={classes.testimonialAuthor} variant="body1">Jude Thorn - Designer</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <img className={classes.testimonial} src="/images/testimonial-2.svg" alt="testimonial" />
                        <Typography className={classes.testimonialText} variant="body1">
                            Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!
                        </Typography>
                        <Typography className={classes.testimonialAuthor} variant="body1">Jude Thorn - Designer</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper} elevation={0}>
                        <img className={classes.testimonial} src="/images/testimonial-3.svg" alt="testimonial" />
                        <Typography className={classes.testimonialText} variant="body1">
                            Evolo has always helped or startup to position itself in the highly competitive market of mobile applications. You will not regret using it!
                        </Typography>
                        <Typography className={classes.testimonialAuthor} variant="body1">Jude Thorn - Designer</Typography>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <img className={classes.img} src="/images/testimonials-2-men-talking.svg" alt="Men Talking" />
                </div>
                <div className={classes.rightContainer}>
                    <Typography className={classes.title} variant="h2">Testimonials</Typography>
                    <div className={classes.sliderContainer}>
                        <div className={classes.testimonials}>
                            <Grid container spacing={1}>
                                <Grid container item xs={12} spacing={3}>
                                    <FormRow />
                                </Grid>
                            </Grid>
                        </div>
                        <IconButton className={classes.btn} size="medium">
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton className={classes.btn} size="medium">
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;