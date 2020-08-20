import React from 'react';
import { Typography, Paper, IconButton } from '@material-ui/core';
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
        height: 'auto'
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
}));

function Testimonials() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <div className={classes.leftContainer}>
                    <img className={classes.img}src="/images/testimonials-2-men-talking.svg" alt="Men Talking" />
                </div>
                <div className={classes.rightContainer}>
                    <Typography className={classes.title} variant="h2">Testimonials</Typography>
                    <div className={classes.sliderContainer}>
                        <div className={classes.testimonials}>
                            <Paper></Paper>
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