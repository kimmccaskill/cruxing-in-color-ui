import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderImage from "../components/HeaderImage";
import groupImg from "../images/home-img.png";
import EmbedSocialWidget from "../components/EmbedSocialWidjet";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  mission: {},
  textBlock: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth={false}>
      <HeaderImage src={groupImg} alt="Group of CiC members" />
      <Container className={classes.mission} maxWidth="md">
        <Typography className={classes.textBlock} variant="h5" align="center">
          Our mission is to connect, educate, and inspire self-identified
          climbers of color in the Denver area by organizing meetups,
          scholarships and by offering free mentorship and access to gear.
        </Typography>
        <Typography className={classes.textBlock} variant="h5" align="center">
          We aim to foster representation at the crag and gym and break down
          barriers that systemically keep people of color out of these spaces.
        </Typography>
      </Container>
      <EmbedSocialWidget />
    </Container>
  );
};

export default Home;
