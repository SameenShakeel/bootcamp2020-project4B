import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: 'white',
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    icon: {
        height: theme.spacing(10),
        width: theme.spacing(15),
    },
    logo: {
        flexGrow: 1,
    }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function NavBar(props) {
    const classes = useStyles();

    return (
        <Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logo}>
                    <Link variant="button" color="textPrimary" href="index.html">
                        <img className={classes.icon} src="/images/logo.svg" alt="Logo" />
                    </Link>
                    </div>
                    <nav>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Home
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Services
                         </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Pricing
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Request
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            About
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                            Contact
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            </ElevationScroll>
        </Fragment>
    )
}

export default NavBar;
