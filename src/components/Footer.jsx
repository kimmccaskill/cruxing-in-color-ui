import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Logo from "../images/full-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F0EEEE",
    flexGrow: 1,
    display: "flex",
    height: "10rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  links: {
    padding: theme.spacing(2),
    marginRight: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
  link: {
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  logo: {
    height: "100%",
    maxHeight: "150px",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <img className={classes.logo} src={Logo} alt="Cruxing in Color" />
      </div>
      <div className={classes.links}>
        <Link
          component={RouterLink}
          to="/home"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/events"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Events
        </Link>
        <Link
          component={RouterLink}
          to="/opportunities"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Opportunities
        </Link>
        <Link
          component={RouterLink}
          to="/donate"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Donate
        </Link>
        {/* <Link
          component={RouterLink}
          to="/resources"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          Resources
        </Link> */}
        <Link
          component={RouterLink}
          to="/about"
          color="inherit"
          underline="none"
          className={classes.link}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Footer;
