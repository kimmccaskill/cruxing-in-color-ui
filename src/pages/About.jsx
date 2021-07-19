import React from 'react';
import {Container, Typography, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  intro: {
    margin: theme.spacing(8),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={false}>
      <Typography className={classes.intro} align="center" variant="body2">
        <Box>
          CIC was born out of a small meetup group organized by Jalen Bazile
          called Melanin Climbers of Colorado that began connecting in December
          2019. When COVID left the account silent all spring and summer, Jalen
          asked Shara to take over the account while he moved towards his
          passion of diversifying cycling. In September 2020, Shara revived and
          rebranded the account as Cruxing in Color and paired up with Menesha
          and Enrique. Since then, CIC has reached 5x as many followers and the
          group has been hosting meetups around the greater Denver area
          averaging around 60 climbers a night.
        </Box>
      </Typography>
    </Container>
  );
};

export default About;
