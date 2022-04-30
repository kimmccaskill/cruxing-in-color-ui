import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@material-ui/core";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  linkHamburger: {
    color: "black",
    paddingBottom: theme.spacing(1),
    "&:hover, &:focus": {
      borderBottom: "solid 1px black",
    },
  },
  homeLink: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    color: "black",
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    "&:hover, &:focus": {
      borderBottom: "solid 1px black",
    },
  },
  navButtons: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const path = window.location.pathname;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const links = (
    <Fragment>
      <Link
        component={RouterLink}
        to="/home"
        // color="textSecondary"
        underline="none"
        className={classes.link}
        activeStyle={{
          borderBottom: "1px solid black",
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
          borderBottom: "1px solid black",
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
          borderBottom: "1px solid black",
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
          borderBottom: "1px solid black",
        }}
      >
        Donate
      </Link>
      <Link
        component={RouterLink}
        to="/about"
        color="inherit"
        underline="none"
        className={classes.link}
        activeStyle={{
          borderBottom: "1px solid black",
        }}
      >
        About
      </Link>
    </Fragment>
  );
  const renderNav = () => {
    if (matches) {
      return (
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      );
    }
    return links;
  };
  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar>
        <Link href="/home" underline="none" className={classes.homeLink}>
          <Typography variant="h6" className={classes.title}>
            Cruxing in Color
          </Typography>
        </Link>
        <div>
          {matches && (
            <Menu
              className={classes.navButtons}
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link
                component={RouterLink}
                to="/home"
                // color="textSecondary"
                underline="none"
                className={classes.linkHamburger}
                activeStyle={{
                  borderBottom: "1px solid black",
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/events"
                color="inherit"
                underline="none"
                className={classes.linkHamburger}
                activeStyle={{
                  borderBottom: "1px solid black",
                }}
              >
                <MenuItem onClick={handleClose}>Events</MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/opportunities"
                color="inherit"
                underline="none"
                className={classes.linkHamburger}
                activeStyle={{
                  borderBottom: "1px solid black",
                }}
              >
                <MenuItem onClick={handleClose}>Opportunities</MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/donate"
                color="inherit"
                underline="none"
                className={classes.linkHamburger}
                activeStyle={{
                  borderBottom: "1px solid black",
                }}
              >
                <MenuItem onClick={handleClose}>Donate</MenuItem>
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="none"
                className={classes.linkHamburger}
                activeStyle={{
                  borderBottom: "1px solid black",
                }}
              >
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Link>
            </Menu>
          )}
          {renderNav()}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
