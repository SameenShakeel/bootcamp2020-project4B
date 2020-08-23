import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { Facebook, Twitter } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '6.25rem',
        marginBottom: '6.25rem',
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    title: {
        color: '#393939',
        font: '700 2.25rem/2.75rem "Raleway", sans-serif'
    },
    text: {
        width: '65%',
        marginBottom: '3.875rem',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    teamContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexFlow: 'row',
        justifyContent: 'space-around'
    },
    paper: {
        padding: theme.spacing(2),
        width: '12.5rem',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginRight: '2rem',
        marginLeft: '2rem'
    },
    img: {
        borderRadius: '50%',
        maxWidth: '100%',
        marginBottom: '1.5rem'
    },
    name: {
        color: '#626262',
        font: '400 1rem/1.5rem "Raleway", sans-serif',
        marginBottom: '0.25rem',
        fontSize: '1.125rem'
    },
    job: {
        color: '#626262',
        font: '400 0.875rem/1.375rem "Raleway", sans-serif',
        marginBottom: '0.375rem'
    },
    icon: {
        color: '#00bfd8',
        fontSize: '2rem'
    },
}));

function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <Typography className={classes.title} variant="h2" gutterBottom>About The Team</Typography>
                <Typography className={classes.text} variant="body1" color="textSecondary">
                    Meat our team of specialized marketers and business developers which will help you research new products and launch them in new emerging markets
                </Typography>
            </div>
            <div className={classes.teamContainer}>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.img} src="/images/team-member-1.svg" alt="team member" />
                    <Typography className={classes.name} variant="body1">
                        <strong>Lacy Whitelong</strong>
                    </Typography>
                    <Typography className={classes.job} variant="body1">Business Developer</Typography>
                    <Facebook className={classes.icon}/>
                    <Twitter className={classes.icon}/>
                </Paper>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.img} src="/images/team-member-2.svg" alt="team member" />
                    <Typography className={classes.name} variant="body1">
                        <strong>Chris Brown</strong>
                    </Typography>
                    <Typography className={classes.job} variant="body1">Online Marketer</Typography>
                    <Facebook className={classes.icon}/>
                    <Twitter className={classes.icon} />
                </Paper>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.img} src="/images/team-member-3.svg" alt="team member" />
                    <Typography className={classes.name} variant="body1">
                        <strong>Sheila Zimerman</strong>
                    </Typography>
                    <Typography className={classes.job} variant="body1">Software Engineer</Typography>
                    <Facebook className={classes.icon}/>
                    <Twitter className={classes.icon} />
                </Paper>
                <Paper className={classes.paper} elevation={0}>
                    <img className={classes.img} src="/images/team-member-4.svg" alt="team member" />
                    <Typography className={classes.name} variant="body1">
                        <strong>Mary Villalonga</strong>
                    </Typography>
                    <Typography className={classes.job} variant="body1">Product Manager</Typography>
                    <Facebook className={classes.icon}/>
                    <Twitter className={classes.icon} />
                </Paper>
            </div>
        </div>
    );
}

export default About;