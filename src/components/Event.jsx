import React from 'react';
import {Container, Typography, Box, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
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
    description = '',
    buttonTitle = null,
    buttonLink = null,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body1">
        <Box fontWeight="fontWeightBold">{date}</Box>
        <Box className={classes.details}>{time}</Box>
        <Box className={classes.details}>{title}</Box>
        <Box className={classes.details}>{location}</Box>
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
