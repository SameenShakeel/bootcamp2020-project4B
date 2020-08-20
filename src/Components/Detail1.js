import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '200px',
        paddingLeft: '200px',
        marginTop: '100px',
        marginBottom: '100px'
    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
        marginTop: '40px',
        marginRight: '50px'
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
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
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    image: {
        width: '550px',
    }
}));


function Detail1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <Typography className={classes.title} variant="h2" gutterBottom>Design And Plan Your Business Growth Steps</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</Typography>
                <Button className={classes.btn} variant="contained" size="large">LIGHTBOX</Button>
            </div>
            <div className={classes.imageContainer}>
                <img className={classes.image} src="/images/details-1-office-worker.svg" alt="Teamwork" />
            </div>
        </div>
    );
}

export default Detail1;