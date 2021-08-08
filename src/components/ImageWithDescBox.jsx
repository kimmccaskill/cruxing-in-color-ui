import React, { Fragment } from "react";
import { Container, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(20),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingLeft: 0,
      flexDirection: "column",
    },
  },
  root2: {
    paddingRight: theme.spacing(20),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      paddingRight: 0,
      flexDirection: "column-reverse",
    },
  },
  img: {
    width: "60%",
    objectFit: "cover",
    maxHeight: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  descriptionBox: {
    backgroundColor: "#F0EEEE",
    right: theme.spacing(20),
    width: "40%",
    height: "fit-content",
    padding: theme.spacing(4),
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      left: "auto",
      backgroundColor: "inherit",
      padding: theme.spacing(0),
      paddingTop: theme.spacing(2),
      width: "70%",
      position: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  descriptionBox2: {
    backgroundColor: "#F0EEEE",
    left: theme.spacing(20),
    width: "40%",
    height: "fit-content",
    padding: theme.spacing(4),
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      left: "auto",
      backgroundColor: "inherit",
      padding: theme.spacing(0),
      paddingTop: theme.spacing(2),
      width: "70%",
      position: "inherit",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  button: {
    marginTop: theme.spacing(3),
    width: "fit-content",
  },
  testroot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ImageWithDescBox = (props) => {
  const {
    src,
    alt = "",
    title = "",
    description = "",
    description2 = null,
    imageSide = "left",
    buttonLink = null,
    buttonTitle = null,
  } = props;
  const classes = useStyles();

  const cardDetails = (
    <Fragment>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      {description2 && <Typography variant="body1">{description}</Typography>}
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
    </Fragment>
  );
  return imageSide === "left" ? (
    <div className={classes.root}>
      <img className={classes.img} src={src} alt={alt} />
      <Paper className={classes.descriptionBox} elevation={0} square={true}>
        {cardDetails}
      </Paper>
    </div>
  ) : (
    <div className={classes.root2}>
      <Paper className={classes.descriptionBox2} elevation={0} square={true}>
        {cardDetails}
      </Paper>
      <img className={classes.img} src={src} alt={alt} />
    </div>
  );
};

export default ImageWithDescBox;
