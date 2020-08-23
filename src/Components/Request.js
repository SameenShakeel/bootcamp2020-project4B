import React from 'react';
import { Typography, Button, TextField, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '6.25rem',
        backgroundColor: '#f9fafc',
        paddingRight: '9.375rem',
        paddingLeft: '9.375rem',
        paddingTop: '6.25rem',
        paddingBottom: '6.25rem',
        justifyContent: 'space-around',

    },
    textContainer: {
        flex: '0 0 50%',
        maxWidth: '40%',
    },
    title: {
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        color: '#393939'
    },
    text: {
        font: '400 0.875rem/1.375rem "Raleway", sans-serif'
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
    form: {
        flex: '0 0 50%',
        maxWidth: '40%',
    },
    textfield: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: '0.625rem',
        color: '#626262',
        font: '400 0.875rem/1.375rem "Raleway", sans-serif'
    },
    selectEmpty: {
        backgroundColor: 'white',
        marginBottom: '0.625rem',
        width: '100%',
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


function Request() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <div className={classes.textContainer}>
                    <Typography className={classes.title} variant="h2" gutterBottom>Fill The Following Form To Request A Meeting</Typography>
                    <Typography className={classes.text} variant="body1" color="textSecondary" gutterBottom>Evolo is one of the easiest and feature packed marketing automation apps in the market. Discover what it can do for your business organization right away.</Typography>
                    <ul className={classes.listContainer}>
                        <li>
                            <span className={classes.tick}>&#10003;</span><strong>Automate your marketing</strong> activities and get results today
                        </li>
                        <li>
                            <span className={classes.tick}>&#10003;</span>
                            <strong>Interact with all your</strong> targeted customers at a personal level
                        </li>
                        <li>
                            <span className={classes.tick}>&#10003;</span>
                            <strong>Convince them to buy</strong> your company's awesome products
                        </li>
                        <li>
                            <span className={classes.tick}>&#10003;</span>
                            <strong>Save precious time</strong> and invest it where you need it the most
                        </li>
                    </ul>
                </div>
                <div className={classes.form}>
                        <TextField
                            className={classes.textfield}
                            label="Full Name"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textfield}
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.textfield}
                            label="Phone"
                            variant="outlined"
                        />
                        <Select native variant="outlined" defaultValue="Interested In..." className={classes.selectEmpty}>
                            <option value="Interested In..." disabled>
                                Interested In...
                            </option>
                            <option value="Starter">Starter</option>
                            <option value="Medium">Medium</option>
                            <option value="Complete">Complete</option>
                        </Select>
                        <Button className={classes.btn} variant="contained" size="large">REQUEST</Button>
                </div>
        </div>
    );
}

export default Request;