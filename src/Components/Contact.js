import React from 'react';
import { Typography, TextField, Button, Link } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({easing: 'ease-out-back'});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#f9fafc',
        paddingRight: '9.375rem',
        paddingLeft: '9.375rem',
        paddingTop: '7rem',
        paddingBottom: '6.25rem',
        justifyContent: 'space-around',
        textAlign: 'center'
    },
    imageContainer: {
        flex: '0 0 50%',
        maxWidth: '50%',
    },
    image: {
        width: '28.125rem',
    },
    container: {
        flex: '0 0 100%',
        maxWidth: '100%',
    },
    title: {
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        color: '#393939',
        marginBottom: '1rem'
    },
    listContainer: {
        lineHeight: '1.5rem',
        fontSize: '1rem',
        marginBottom: '3.75rem',
        color: '#626262',
        font: '400 0.875rem/1.375rem "Raleway", sans-serif'
    },
    list: {
        display: 'inline-block',
        marginRight: '0.5rem',
        marginLeft: '0.5rem'
    },
    icon: {
        color: '#00bfd8',
        marginRight: '0.5rem',
        fontSize: '1rem',
    },
    link: {
        color: '#00bfd8',
    },
    form: {
        flex: '0 0 50%',
        maxWidth: '40%',
    },
    textfield: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: '1.25rem',
        color: '#626262',
        font: '400 0.875rem/1.375rem "Raleway", sans-serif'
    },
    btn: {
        marginTop: "1.25rem",
        borderRadius: "1.5625rem",
        backgroundColor: '#00bfd8',
        border: '0.125rem solid #00bfd8',
        color: "white",
        width: '100%',
        height: '3.125rem',
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: 'white',
            color: '#00bfd8',
        },
    },
}));

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root} data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1000">
            <div className={classes.container} data-aos="zoom-out" data-aos-delay="1300" data-aos-duration="2000">
                <Typography className={classes.title} variant="h2">Contact Information</Typography>
                <ul className={classes.listContainer}>
                    <li>
                        Don't hesitate to give us a call or send us a contact form message
                    </li>
                    <li className={classes.list}>
                        <RoomIcon className={classes.icon} />22 Innovative Area, San Francisco, CA 94043, US
                    </li>
                    <li className={classes.list}>
                        <PhoneEnabledIcon className={classes.icon} />
                        <Link className={classes.link} href="#">+81 720 2212</Link>
                    </li>
                    <li className={classes.list}>
                        <MailIcon className={classes.icon} />
                        <Link className={classes.link} href="#">office@evolo.com</Link>
                    </li>
                </ul>
            </div>
            <div className={classes.imageContainer} data-aos="fade-right" data-aos-delay="1600" data-aos-duration="2000">
                <img className={classes.image} src="/images/mail-letter.png" alt="letter" />
            </div>
            <div className={classes.form} data-aos="fade-left" data-aos-delay="1900" data-aos-duration="2000">
                <TextField
                    className={classes.textfield}
                    label="Name"
                    variant="outlined"
                />
                <TextField
                    className={classes.textfield}
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    className={classes.textfield}
                    label="Your Message"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <Button className={classes.btn} variant="contained" size="large">SUBMIT MESSAGE</Button>
            </div>
        </div>
    );
}

export default Contact;