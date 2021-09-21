import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderImage from "../components/HeaderImage";
import groupImg from "../images/home-img.png";
import EmbedSocialWidget from "../components/EmbedSocialWidget";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "80vh",
  },
  mission: {},
  textBlock: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  instagram: {
    marginTop: theme.spacing(4),
  },
}));

const Home = () => {
  const [homepage, setHomepage] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://strapi-cic.herokuapp.com/homepages");

      setHomepage(result.data[0]);
    };

    fetchData();
  }, []);

  const renderHeaderImage = () => (
    <HeaderImage src={homepage.img} alt="Group of CiC members" />
  );

  const renderMission = () => (
    <Container className={classes.mission} maxWidth="md">
      <Typography className={classes.textBlock} variant="h5" align="center">
        {homepage.textBlock1}
      </Typography>
      {homepage.textBlock2 && (
        <Typography className={classes.textBlock} variant="h5" align="center">
          {homepage.textBlock2}
        </Typography>
      )}
    </Container>
  );

  return (
    <Container className={classes.root} maxWidth={false}>
      {renderHeaderImage()}
      {homepage.textBlock1 && renderMission()}
      <div className={classes.instagram}>
        <EmbedSocialWidget />
      </div>
    </Container>
  );
};

export default Home;
