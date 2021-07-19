import React from 'react';
import {Container, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  root2: {
    // width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  img: {
    width: '75%',
    objectFit: 'cover',
    maxHeight: '500px',
  },
  descriptionBox: {
    backgroundColor: '#F0EEEE',
    right: theme.spacing(2),
    width: '50%',
    height: 'fit-content',
    position: 'absolute',
    padding: theme.spacing(4),
  },
  descriptionBox2: {
    backgroundColor: '#F0EEEE',
    left: theme.spacing(2),
    width: '50%',
    height: 'fit-content',
    position: 'absolute',
    padding: theme.spacing(4),
  },
}));

const ImageWithDescBox = (props) => {
  const {
    src,
    alt = '',
    title = '',
    description = '',
    description2 = null,
    imageSide = 'left',
    buttonLink = null,
  } = props;
  const classes = useStyles();
  return imageSide === 'left' ? (
    <div className={classes.root}>
      <img className={classes.img} src={src} alt={alt} />
      <Paper className={classes.descriptionBox} elevation={0} square={true}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
        {description2 && (
          <Typography variant="caption">{description}</Typography>
        )}
      </Paper>
    </div>
  ) : (
    <div className={classes.root2}>
      <Paper className={classes.descriptionBox2} elevation={0} square={true}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
        {description2 && (
          <Typography variant="caption">{description}</Typography>
        )}
      </Paper>
      <img className={classes.img} src={src} alt={alt} />
    </div>
  );
};

export default ImageWithDescBox;
