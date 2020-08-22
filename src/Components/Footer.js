import React, { Fragment } from 'react';
import { Typography, Link, Container, Box, Grid, CssBaseline } from '@material-ui/core';
import { Facebook, Twitter, LinkedIn, Instagram, Pinterest } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="index.html">
                Envolo
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles((theme) => ({
    list: {
        listStyle: 'square',
    },
    footer: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    },
    icon: {
        color: '#00bfd8'
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="md" className={classes.footer}>
                <Grid container spacing={5} justify="space-evenly">
                    <Grid item xs>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            About Evolo
                        </Typography>
                        <Typography variant="body2" color="textPrimary" gutterBottom>
                            We're passionate about offering some of the best business growth services for startups
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Important Links
                        </Typography>
                        <ul className={classes.list}>
                            <li>Our business partners <Link href="#">abcguide.com</Link></li>
                            <li>Read our <Link href="#">Terms & Conditions </Link>, <Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            Social Media
                    </Typography>
                        <Facebook className={classes.icon} fontSize="large" />
                        <Twitter className={classes.icon} fontSize="large" />
                        <LinkedIn className={classes.icon} fontSize="large" />
                        <Instagram className={classes.icon} fontSize="large" />
                        <Pinterest className={classes.icon} fontSize="large" />
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </Fragment>
    )
}

export default Footer;