import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '86px',
        backgroundImage: `url(${'/images/header-background.jpg'})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    textContainer: {
        maxWidth: "35%",
        padding: "70px",
        paddingRight: 0
    },
    imageContainer: {
        position: 'absolute',
        right:  '10%',
        top: '20%',
    },
    btn: {
        marginTop: "15px",
        borderRadius: "20px",
        backgroundColor: '#00bfd8',
        border: '0.125rem solid #00bfd8',
        color: "white",
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: 'white',
            color: '#00bfd8',
        },
    },
    image: {
        width: '400px',
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <Typography variant="h2">Lorem Ipsum</Typography>
                <Typography variant="h3" gutterBottom>dolor sit amet</Typography>
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
