import React from "react";
import { Container, Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    width: "23%",
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  details: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

const Event = (props) => {
  const {
    date,
    time,
    title,
    location,
    description = "",
    buttonTitle = null,
    buttonLink = null,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body1">
        <Box fontWeight="fontWeightBold">{date}</Box>
      </Typography>
      <Typography variant="subtitle2">
        <Box className={classes.details}>{time}</Box>
      </Typography>
      <Typography variant="body1">
        <Box
          className={classes.details}
          style={{ textDecoration: "underline" }}
          fontWeight={500}
        >
          {title}
        </Box>

        <Box className={classes.details}>{location}</Box>
      </Typography>
      {description && <div>_</div>}
      <Typography variant="body1">
        <Box className={classes.details}>{description}</Box>
      </Typography>
      {buttonTitle && buttonLink && (
        <Button
          className={classes.button}
          target="_blank"
          href={buttonLink}
          disableElevation
          variant="contained"
        >
          {buttonTitle}
        </Button>
      )}
    </div>
  );
};

export default Event;
