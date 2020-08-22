import React from 'react';
import { Typography, Paper, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    services: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '100px',
        marginBottom: '100px'
    },
    container: {
        flex: '0 0 100%',
        maxWidth: '100%',
    },
    title: {
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        color: '#393939',
        textAlign: 'center'
    },
    subTitle: {
        font: '700 1.375rem/1.875rem "Raleway", sans-serif',
        color: '#393939',
    },
    text: {
        width: '65%',
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '3.875rem'
    },
    control: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: '320px'
    },
    img: {
        width: '6rem',
        height: '6rem',
        marginBottom: '2rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
}));


function Service() {
    const classes = useStyles();

    return (
        <div className={classes.services}>
            <Container maxWidth="md">
                <div className={classes.container}>
                    <Typography className={classes.title} variant="h2" color="textPrimary" gutterBottom>Business Growth Services</Typography>
                    <Typography className={classes.text} variant='body1' color="textSecondary">We serve small and medium sized companies in all tech related industries with high quality growth services which are presented below</Typography>
                </div>
                <Grid container spacing={5} justify="space-evenly">
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3}>
                            <img className={classes.img} src="/images/services-icon-1.svg" alt="service" />
                            <Typography className={classes.subTitle} variant="h4" color="textPrimary" gutterBottom>
                                Market Analysis
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3}>
                            <img className={classes.img} src="/images/services-icon-2.svg" alt="service" />
                            <Typography className={classes.subTitle} variant="h4" color="textPrimary" gutterBottom>
                                Opportunity Scan
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                Once the market analysis process is completed our staff will search for opportunities that are in reach
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control} elevation={3}>
                            <img className={classes.img} src="/images/services-icon-3.svg" alt="service" />
                            <Typography className={classes.subTitle} variant="h4" color="textPrimary" gutterBottom>
                                Action Plan
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                With all the information in place you will be presented with an action plan that your company needs to follow
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Service;