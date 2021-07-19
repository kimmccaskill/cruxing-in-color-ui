import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography} from '@material-ui/core';
import {NavLink as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'black',
  },
  link: {
    color: 'black',
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    '&:hover, &:focus': {
      borderBottom: 'solid 1px black',
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const path = window.location.pathname;
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Cruxing in Color
        </Typography>
        <Link
          component={RouterLink}
          to="/home"
          // color="textSecondary"
          underline="none"
          className={classes.link}
          activeStyle={{
            borderBottom: '1px solid black',
          }}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/events"
          color="inherit"
          underline="none"
          className={classes.link}
          activeStyle={{
            borderBottom: '1px solid black',
          }}
        >
          Events
        </Link>
        <Link
          component={RouterLink}
          to="/opportunities"
          color="inherit"
          underline="none"
          className={classes.link}
          activeStyle={{
            borderBottom: '1px solid black',
          }}
        >
          Opportunities
        </Link>
        <Link
          component={RouterLink}
          to="/donate"
          color="inherit"
          underline="none"
          className={classes.link}
          activeStyle={{
            borderBottom: '1px solid black',
          }}
        >
          Donate
        </Link>
        <Link
          component={RouterLink}
          to="/resources"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Resources
        </Link>
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
          underline="none"
          className={classes.link}
          activeStyle={{
            borderBottom: '1px solid black',
          }}
        >
          About
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
