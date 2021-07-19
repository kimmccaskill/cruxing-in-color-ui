import React from 'react';
import {Container, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  details: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(20),
  },
}));

const Event = (props) => {
  const {date, title, location, link} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body1">
        <Box fontWeight="fontWeightBold">{date}</Box>
        <Box className={classes.details}>{title}</Box>
        <Box className={classes.details}>{location}</Box>
      </Typography>
    </div>
  );
};

export default Event;
