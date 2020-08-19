import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '200px',
        paddingLeft: '200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        marginBottom: '100px'
    },
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
        marginRight: '50px'
    },
    image: {
        width: '550px',
    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
        marginTop: '40px'
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
    },
    tick: {
        fontWeight: '700',
        fontSize: '1.2rem',
        color: '#00bfd8',
        marginRight: '6px'
    },
    listContainer: {
        textAlign: 'left',
        marginTop: '1.875rem',
        marginBottom: '1.625rem',
        color: '#626262'
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
}));


function Detail2() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src="/images/details-2-office-team-work.svg" alt="Teamwork" />
            </div>
            <div className={classes.textContainer}>
                <Typography className={classes.title} variant="h2" gutterBottom>Search For Optimization Wherever Is Possible</Typography>
                <ul className={classes.listContainer}>
                    <li>
                        <span className={classes.tick}>&#10003;</span>Basically we'll teach you step by step what you need to do
                    </li>
                    <li>
                        <span className={classes.tick}>&#10003;</span>In order to develop your company and reach new heights
                    </li>
                    <li>
                        <span className={classes.tick}>&#10003;</span>Everyone will be pleased from stakeholders to employees
                    </li>
                </ul>
                <Button className={classes.btn} variant="contained" size="large">LIGHTBOX</Button>
            </div>
        </div>
    );
}

export default Detail2;