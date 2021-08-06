import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(4),
  },
  img: {
    height: "500px",
    width: "500px",
    objectFit: "cover",
  },
  descriptionBox: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(6),
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
