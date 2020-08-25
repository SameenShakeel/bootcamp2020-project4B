import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({easing: 'ease-out-back'});

const useStyles = makeStyles((theme) => ({
    slider: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginBottom: '6.25rem',
        justifyContent: 'space-around',
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
        maxWidth: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    sliderwrapper: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
    },
    img: {
        verticalAlign: 'middle',
        marginRight: '1.25rem',
        marginLeft: '1.25rem'
    },
}));

function Customers() {
    const classes = useStyles();

    return (
        <div className={classes.slider} data-aos="fade-in" data-aos-delay="300" data-aos-duration="1000">
            <div className={classes.title}>
                <Typography className={classes.text} variant="h5" color="textPrimary" gutterBottom>Trusted By</Typography>
            </div>
            <div className={classes.sliderContainer}>
                <div className={classes.sliderwrapper}>
                    <img className={classes.img} src="/images/customer-logo-1.png" alt="Customer" data-aos="zoom-in" data-aos-delay="700" data-aos-duration="1200"/>
                    <img className={classes.img} src="/images/customer-logo-2.png" alt="Customer" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1200"/>
                    <img className={classes.img} src="/images/customer-logo-3.png" alt="Customer" data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1200"/>
                    <img className={classes.img} src="/images/customer-logo-4.png" alt="Customer" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1200"/>
                    <img className={classes.img} src="/images/customer-logo-5.png" alt="Customer" data-aos="zoom-in" data-aos-delay="1100" data-aos-duration="1200"/>
                    <img className={classes.img} src="/images/customer-logo-6.png" alt="Customer" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1200"/>
                </div>
            </div>
            {/* <div class="images">
                <div class="images-inner">
                    <div class="image-slide">
                        <div class="image bg-yellow" style="background-color:yellow;">image slide 1</div>
                    </div>
                    <div class="image-slide">
                        <div class="image bg-blue" style="background-color:pink;">imager slide 2</div>
                    </div>
                    <div class="image-slide">
                        <div class="image bg-red" style="background-color:orange;">image slide 3</div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Customers;