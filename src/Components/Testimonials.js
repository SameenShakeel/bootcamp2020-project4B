import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({easing: 'ease-out-back'});

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${'/images/testimonials-background.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '100%',
        height: '100%',
        marginTop: '12.5rem',
        marginBottom: '12.5rem',
    },
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '6.25rem',
        paddingLeft: '6.25rem',
        paddingTop: '7.5rem',
        paddingBottom: '7.5rem',
        justifyContent: 'space-around',
    },
    leftContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    img: {
        width: '34.375rem'
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
        marginBottom: '0.9375rem',
    },
    testimonial: {
        width: '7rem',
        height: '7rem',
        marginRight: '1.25rem',
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
        <div className={classes.root} data-aos="fade-in" data-aos-delay="800" data-aos-duration="1000">
            <div className={classes.mainContainer}>
                <div className={classes.leftContainer} data-aos="fade-right" data-aos-delay="1100" data-aos-duration="2000">
                    <img className={classes.img} src="/images/testimonials-2-men-talking.svg" alt="Men Talking" />
                </div>
                <div className={classes.rightContainer}>
                    <Typography className={classes.title} variant="h2" data-aos="zoom-out" data-aos-delay="1400" data-aos-duration="2000">
                        Testimonials
                    </Typography>
                    <Paper className={classes.paper} elevation={2} data-aos="flip-up" data-aos-delay="1700" data-aos-duration="2000">
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
                    <Paper className={classes.paper} elevation={2} data-aos="flip-up" data-aos-delay="1900" data-aos-duration="2000">
                        <Grid container spacing={2}>
                            <Grid item >
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
                    <Paper className={classes.paper} elevation={2} data-aos="flip-up" data-aos-delay="2400" data-aos-duration="2000">
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