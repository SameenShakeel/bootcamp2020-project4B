import React from 'react';
import { Typography, Paper, Grid, Divider, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    services: {
        marginTop: '50px',
        marginBottom: '50px'
    },
    title: {
        font: '700 1.375rem/1.875rem "Raleway", sans-serif',
        color: '#393939',
        textAlign: 'center'
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
        height: '350px'
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
                <Typography className={classes.title} variant="h2" color="textPrimary" gutterBottom>Business Growth Services</Typography>
                <Typography className={classes.text} variant='body1' color="textSecondary" gutterBottom>We serve small and medium sized companies in all tech related industries with high quality growth services which are presented below</Typography>
                <Grid container spacing={5} justify="space-evenly">
                    <Grid item xs>
                        <Paper className={classes.control}>
                            <img className={classes.img} src="/images/services-icon-1.svg" alt="service" />
                            <Typography className={classes.title} variant="h4" color="textPrimary" gutterBottom>
                                Market Analysis
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control}>
                            <img className={classes.img} src="/images/services-icon-1.svg" alt="service" />
                            <Typography className={classes.title} variant="h4" color="textPrimary" gutterBottom>
                                Market Analysis
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.control}>
                            <img className={classes.img} src="/images/services-icon-1.svg" alt="service" />
                            <Typography className={classes.title} variant="h4" color="textPrimary" gutterBottom>
                                Market Analysis
                            </Typography>
                            <Typography variant="body1" color="textSecondary" gutterBottom>
                                Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Service;