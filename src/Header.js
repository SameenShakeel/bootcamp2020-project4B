import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
        backgroundImage: `url(${'/images/header-background.jpg'})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '800px',
    },
    textContainer: {
        maxWidth: "40%",
        padding: "200px",
        paddingRight: 0
    },
    text: {
        font: '700 3rem/3.5rem "Raleway", sans-serif',
        color: '#00bfd8',
    },
    text1: {
        font: '700 3rem/3.5rem "Raleway", sans-serif',
        color: '#393939'
    },
    imageContainer: {
        position: 'absolute',
        right:  '15%',
        top: '20%',
    },
    btn: {
        marginTop: "20px",
        borderRadius: "25px",
        backgroundColor: '#00bfd8',
        border: '0.125rem solid #00bfd8',
        color: "white",
        width: '150px',
        height: '50px',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: 'white',
            color: '#00bfd8',
        },
    },
    image: {
        width: '500px',
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <Typography className={classes.text} variant="h1">Lorem Ipsum</Typography>
                <Typography className={classes.text1} variant="h3" gutterBottom>dolor sit amet</Typography>
                <Typography variant="body1">Use Evolo to promote your business startup and generate leads for the offered services</Typography>
                <Button className={classes.btn} variant="contained" size="large">DISCOVER</Button>
            </div>
            <div className={classes.imageContainer}>
                <img className={classes.image} src="/images/header-teamwork.svg" alt="Teamwork" />
            </div>
        </div>
    )
}

export default Header;
