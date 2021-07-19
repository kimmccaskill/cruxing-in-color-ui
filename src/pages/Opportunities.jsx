import React from 'react';
import {Container, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ImageWithDescBox from '../components/ImageWithDescBox';
import scholarshipImg from '../images/scholarship-img.png';
import needGearImg from '../images/opportunities.jpg';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Opportunities = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4">
        Opportunities
      </Typography>
      <ImageWithDescBox
        src={scholarshipImg}
        alt="Climbers"
        title="Scholarship Opportunities"
        description="Cruxing in Color partners with local gyms and other organizations to offer scholarships and other opportunities to our community. Examples of past scholarships include year-long memberships to local gyms."
      />
      <ImageWithDescBox
        src={needGearImg}
        alt="Climbers"
        imageSide="right"
        title="Need Gear"
        description="We collect donations of lightly-used gear and partner with climbing companies to provide gear to our community. Fill out the gear request form below and we'll reach out to you to help you find gear that works for you."
      />
    </div>
  );
};

export default Opportunities;
