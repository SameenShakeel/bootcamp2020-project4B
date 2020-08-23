import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    slider: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginBottom: '6.25rem'
    },
    title: {
        marginBottom: '0.75rem',
        textAlign: 'center',
        width: '100%'
    },
    text: {
        font: '700 1.125rem/1.625rem "Raleway", sans-serif',
        color: '#393939',
    },
    sliderContainer: {
        backgroundColor: '#f7fcfd',
        paddingBottom: '2.75rem',
        paddingTop: '2.75rem',
        borderRadius: '0.5rem',
        maxWidth: '59.375rem',
        margin: 'auto',
    },
    sliderwrapper: {
        height: '1.875rem',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
    },
    img: {
        verticalAlign: 'middle',
        marginRight: '1.25rem'
    }
}));

function Customers() {
    const classes = useStyles();

    return (
        <div className={classes.slider}>
            <div className={classes.title}>
                <Typography className={classes.text}variant="h5" color="textPrimary" gutterBottom>Trusted By</Typography>
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