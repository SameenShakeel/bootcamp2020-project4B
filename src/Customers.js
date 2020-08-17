import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    slider: {
        textAlign: 'center',
        marginBottom: '50px'
    },
    title: {
        font: '700 1.125rem/1.625rem "Raleway", sans-serif',
        color: '#393939',
        marginBottom: '0.75rem'
    },
    sliderContainer: {
        backgroundColor: '#f7fcfd',
        paddingBottom: '2.75rem',
        paddingTop: '2.75rem',
        borderRadius: '0.5rem',
        maxWidth: '950px',
        margin: 'auto',
    },
    sliderwrapper: {
        height: '30px',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
    },
    img: {
        verticalAlign: 'middle',
        marginRight: '20px'
    }
}));

function Customers() {
    const classes = useStyles();

    return (
        <div className={classes.slider}>
            <div>
                <Typography className={classes.title} variant="h5" color="textPrimary" gutterBottom>Trusted By</Typography>
            </div>
            <div className={classes.sliderContainer}>
                <div className={classes.sliderwrapper}>
                    <img className={classes.img} src="/images/customer-logo-1.png" alt="Customer" />
                    <img className={classes.img} src="/images/customer-logo-2.png" alt="Customer" />
                    <img className={classes.img} src="/images/customer-logo-3.png" alt="Customer" />
                    <img className={classes.img} src="/images/customer-logo-4.png" alt="Customer" />
                    <img className={classes.img} src="/images/customer-logo-5.png" alt="Customer" />
                    <img className={classes.img} src="/images/customer-logo-6.png" alt="Customer" />
                </div>
            </div>
        </div>
    );
}

export default Customers;