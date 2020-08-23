import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '6.25rem',
        paddingLeft: '9.375rem',
        marginTop: '9.375rem',
        marginBottom: '6.25rem',
        justifyContent: 'space-around'
    },
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    image: {
        width: '34.375rem',
    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
        marginTop: '2.5rem'
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
    },
    tick: {
        fontWeight: '700',
        fontSize: '1.2rem',
        color: '#00bfd8',
        marginRight: '0.375rem'
    },
    listContainer: {
        textAlign: 'left',
        marginTop: '1.875rem',
        marginBottom: '1.625rem',
        color: '#626262'
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