import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  img: {
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      width: "-webkit-fill-available",
    },
  },
  descriptionBox: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0),
    },
  },
  name: {
    paddingBottom: theme.spacing(4),
    fontWeight: 600,
  },
}));

const Organizer = (props) => {
  const { name = "", description = "", src = "" } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.img} src={src} alt={name} />
      <Paper className={classes.descriptionBox} elevation={0} square={true}>
        <Typography className={classes.name} variant="h6">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Paper>
    </div>
  );
};

export default Organizer;
