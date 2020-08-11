import React, { Fragment } from 'react';
import { Typography, Link, Container, Box, Grid, CssBaseline } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
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
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    }
}));

function Footer() {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="md" component="footer" className={classes.footer}>
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
                        <FacebookIcon fontSize="large" />
                        <TwitterIcon fontSize="large" />
                        <LinkedInIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                        <PinterestIcon fontSize="large" />
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