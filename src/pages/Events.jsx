import React from 'react';
import {Container, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import HeaderImage from '../components/HeaderImage';
import Event from '../components/Event';
import image from '../images/events-img.png';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100vw',
  },
  mission: {},
  title: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  eventsContainer: {
    display: 'flex',
  },
}));

const Events = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={false}>
      <HeaderImage src={image} alt="Group of CiC members" />
      <Container className={classes.mission} maxWidth="md">
        <Typography className={classes.title} variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <div className={classes.eventsContainer}>
          <Event
            date={'April 21, 2021'}
            title={'Gym Meet-up'}
            location={'The Spot Golden'}
          />
          <Event
            date={'May 15, 2021'}
            title={'Cruxing in Color Gym to Crag'}
            location={'Some crag'}
          />
        </div>
        <Typography className={classes.title} variant="h4" gutterBottom>
          Past Events
        </Typography>
        <Event
          date={'April 21, 2021'}
          title={'Gym Meet-up'}
          location={'The Spot Golden'}
        />
        <Event
          date={'May 15, 2021'}
          title={'Cruxing in Color Gym to Crag'}
          location={'Some crag'}
        />
      </Container>
    </Container>
  );
};

export default Events;
