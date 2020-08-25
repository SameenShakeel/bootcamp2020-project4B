import React from 'react';
import { Typography, Paper, Grid, Divider, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({easing: 'ease-out-back'});


const useStyles = makeStyles((theme) => ({
    pricing: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '6.25rem',
        marginBottom: '6.25rem'
    },
    title: {
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        color: '#393939',
        textAlign: 'center',
        marginTop: '0.625rem'
    },
    text: {
        width: '65%',
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '3.875rem'
    },
    para: {
        marginBottom: '1.75rem'
    },
    control: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '31.875rem',
        '&:hover': {
            boxShadow: '5px 10px 18px #888888'
        }
    },
    container: {
        flex: '0 0 100%',
        maxWidth: '100%',
    },
    mainBody: {
        flex: '1 1 auto',
    },
    price: {
        paddingTop: '0.875rem',
        paddingBottom: '1.5rem'
    },
    currency: {
        color: '#00bfd8',
        fontSize: '1.5rem',
        verticalAlign: '56%'
    },
    value: {
        color: '#00bfd8',
        fontWeight: '700',
        fontSize: '3.5rem',
    },
    cross: {
        fontWeight: '200',
        fontSize: '1.5rem',
        color: '#777b7e',
        marginRight: '0.375rem',
        lineHeight: '1.5rem',
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
        marginBottom: '1.625rem'
    },
    list: {
        marginBottom: '0.5rem'
    },
}));


function Pricing() {
    const classes = useStyles();

    return (
        <div className={classes.pricing} data-aos="fade-in" data-aos-delay="600" data-aos-duration="1000">
            <Container maxWidth="md">
                <div className={classes.container} data-aos="zoom-out" data-aos-delay="900" data-aos-duration="2000">
                    <Typography className={classes.title} variant="h2" color="textPrimary" gutterBottom>Multiple Pricing Options</Typography>
                    <Typography className={classes.text} variant='body1' color="textSecondary" gutterBottom>We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations</Typography>
                </div>
                <Grid container spacing={5} justify="space-evenly">
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3} data-aos="zoom-out-up" data-aos-delay="1400" data-aos-duration="2000">
                            <div className={classes.mainBody}>
                                <Typography className={classes.title} variant="h1" color="textPrimary" gutterBottom>
                                    Starter
                                </Typography>
                                <Typography className={classes.para} variant="body2" color="textSecondary">
                                    Just to see what can be achieved
                                </Typography>
                                <Divider variant="middle" />
                                <div className={classes.price}>
                                    <span className={classes.currency}>$</span>
                                    <span className={classes.value}>199</span>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>monthly</Typography>
                                </div>
                                <Divider variant="middle" />
                                <ul className={classes.listContainer}>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>Improve Your Email Marketing
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>User And Admin Rights Control
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.cross}>&#215;</span>List Building And Cleaning
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.cross}>&#215;</span>Collected Data Management
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.cross}>&#215;</span>More Planning And Evaluation
                                    </li>
                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3} data-aos="zoom-out-up" data-aos-delay="1900" data-aos-duration="2000">
                            <div className={classes.mainBody}>
                                <Typography className={classes.title} variant="h1" color="textPrimary" gutterBottom>
                                    Medium
                            </Typography>
                                <Typography className={classes.para} variant="body2" color="textSecondary">
                                    Very appropriate for the short term
                            </Typography>
                                <Divider variant="middle" />
                                <div className={classes.price}>
                                    <span className={classes.currency}>$</span>
                                    <span className={classes.value}>299</span>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>monthly</Typography>
                                </div>
                                <Divider variant="middle" />
                                <ul className={classes.listContainer}>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>Improve Your Email Marketing
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>User And Admin Rights Control
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>List Building And Cleaning
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>Collected Data Management
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.cross}>&#215;</span>More Planning And Evaluation
                                    </li>
                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3} data-aos="zoom-out-up" data-aos-delay="2400" data-aos-duration="2000">
                            <div className={classes.mainBody}>
                                <Typography className={classes.title} variant="h1" color="textPrimary" gutterBottom>
                                    Complete
                                </Typography>
                                <Typography className={classes.para} variant="body2" color="textSecondary">
                                    Must have for large companies
                                </Typography>
                                <Divider variant="middle" />
                                <div className={classes.price}>
                                    <span className={classes.currency}>$</span>
                                    <span className={classes.value}>399</span>
                                    <Typography variant="body1" color="textSecondary" gutterBottom>monthly</Typography>
                                </div>
                                <Divider variant="middle" />
                                <ul className={classes.listContainer}>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>Improve Your Email Marketing
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>User And Admin Rights Control
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>List Building And Cleaning
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>Collected Data Management
                                    </li>
                                    <li className={classes.list}>
                                        <span className={classes.tick}>&#10003;</span>More Planning And Evaluation
                                    </li>
                                </ul>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Pricing;
