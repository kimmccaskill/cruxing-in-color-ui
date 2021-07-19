import React from 'react';
import {Container, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    maxHeight: '600px',
    objectFit: 'cover',
  },
}));

const HeaderImage = (props) => {
  const {src, alt} = props;
  const classes = useStyles();
  return <img className={classes.img} src={src} alt={alt} />;
};

export default HeaderImage;
