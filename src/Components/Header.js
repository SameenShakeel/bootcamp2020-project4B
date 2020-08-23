import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '5rem',
        backgroundImage: `url(${'/images/header-background.jpg'})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '50rem',
    },
    mainContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '9.375rem',
        paddingLeft: '9.375rem',
        justifyContent: 'space-around',
    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
        marginTop: '12.5rem'
    },
    title: {
        font: '700 3rem/3.5rem "Raleway", sans-serif',
        color: '#00bfd8',
    },
    subTitle: {
        font: '700 3rem/3.5rem "Raleway", sans-serif',
        color: '#393939'
    },
    text: {
        color: '#626262'
    },
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
        marginTop: '6.25rem',
    },
    image: {
        width: '31.25rem',
    },
    btn: {
        marginTop: "1.25rem",
        borderRadius: "1.5625rem",
        backgroundColor: '#00bfd8',
        border: '0.125rem solid #00bfd8',
        color: "white",
        width: '9.375rem',
        height: '3.125rem',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: 'white',
            color: '#00bfd8',
        },
    },
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <div className={classes.textContainer}>
                    <Typography className={classes.title} variant="h1">Lorem Ipsum</Typography>
                    <Typography className={classes.subTitle} variant="h3" gutterBottom>dolor sit amet</Typography>
                    <Typography className={classes.text} variant="body1">Use Evolo to promote your business startup and generate leads for the offered services</Typography>
                    <Button className={classes.btn} variant="contained" size="large">DISCOVER</Button>
                </div>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src="/images/header-teamwork.svg" alt="Teamwork" />
                </div>
            </div>
        </div>
    )
}

export default Header;
