import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({easing: 'ease-out-back'});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingRight: '9.375rem',
        paddingLeft: '9.375rem',
        marginTop: '8.25rem',
        marginBottom: '6.25rem',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
        marginTop: '2.5rem',
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
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
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    image: {
        width: '34.375rem',
    }
}));


function Detail1() {
    const classes = useStyles();

    return (
        <div className={classes.root} data-aos="fade-in" data-aos-delay="500" data-aos-duration="1000">
            <div className={classes.textContainer} data-aos="fade-right" data-aos-delay="800" data-aos-duration="2000">
                <Typography className={classes.title} variant="h2" gutterBottom>Design And Plan Your Business Growth Steps</Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>Use our staff and our expertise to design and plan your business growth strategy. Evolo team is eager to advise you on the best opportunities that you should look into</Typography>
                <Button className={classes.btn} variant="contained" size="large">LIGHTBOX</Button>
            </div>
            <div className={classes.imageContainer} data-aos="fade-left" data-aos-delay="1100" data-aos-duration="2000">
                <img className={classes.image} src="/images/details-1-office-worker.svg" alt="Teamwork" />
            </div>
        </div>
    );
}

export default Detail1;