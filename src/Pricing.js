import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    pricing: {
        backgroundColor: 'white'
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        textAlign: 'left'
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    mainTitle: {
        font: '700 2.25rem/2.75rem "Raleway", sans-serif',
        color: '#393939',
    }
}));

const tiers = [
    {
        title: 'Starter',
        subheader: 'Just to see what can be achieved',
        price: '199',
        description: [
            'Improve Your Email Marketing',
            'User And Admin Rights Control',
            'List Building And Cleaning',
            'Collected Data Management',
            'More Planning And Evaluation'
        ],
        buttonText: 'Request',
        buttonVariant: 'outlined',
    },
    {
        title: 'Medium',
        subheader: 'Very appropriate for the short term',
        price: '299',
        description: [
            'Improve Your Email Marketing',
            'User And Admin Rights Control',
            'List Building And Cleaning',
            'Collected Data Management',
            'More Planning And Evaluation'
        ],
        buttonText: 'Request',
        buttonVariant: 'contained',
    },
    {
        title: 'Complete',
        subheader: 'Must have for large companies',
        price: '399',
        description: [
            'Improve Your Email Marketing',
            'User And Admin Rights Control',
            'List Building And Cleaning',
            'Collected Data Management',
            'More Planning And Evaluation'
        ],
        buttonText: 'Request',
        buttonVariant: 'outlined',
    },
];

function Pricing() {
    const classes = useStyles();

    return (
        <div className={classes.pricing}>
            <Fragment>
                <CssBaseline />
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography className={classes.mainTitle} variant="h2" align="center" gutterBottom>
                        Multiple Pricing Options
        </Typography>
                    <Typography variant="body1" color="textSecondary" align="center" component="p">
                        We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations
        </Typography>
                </Container>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} alignItems="flex-end">
                        {tiers.map((tier) => (
                            // Enterprise card is full width at sm breakpoint
                            <Grid item key={tier.title} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        title={tier.title}
                                        subheader={tier.subheader}
                                        titleTypographyProps={{ align: 'center' }}
                                        subheaderTypographyProps={{ align: 'center' }}
                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                        className={classes.cardHeader}
                                    />
                                    <CardContent>
                                        <div className={classes.cardPricing}>
                                            <Typography component="h2" variant="h3" color="textPrimary">
                                                ${tier.price}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                /monthly
                                        </Typography>
                                        </div>
                                        <ul>
                                            {tier.description.map((line) => (
                                                <Typography component="li" variant="subtitle1" align="left" key={line}>
                                                    {line}
                                                </Typography>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardActions>
                                        <Button fullWidth variant={tier.buttonVariant} color="primary">
                                            {tier.buttonText}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Fragment>
        </div>
    );
}

export default Pricing;