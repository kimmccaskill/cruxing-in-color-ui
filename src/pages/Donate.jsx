import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageWithDescBox from "../components/ImageWithDescBox";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100vw',
  },
}));

const Donate = () => {
  const classes = useStyles();
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://strapi-cic.herokuapp.com/donations");

      setDonations(result.data);
    };

    fetchData();
  }, []);

  const renderDonations = () =>
    donations.map((dono) => (
      <Fragment>
        <Fade bottom>
          <ImageWithDescBox
            src={dono.image}
            alt="Climbers"
            title={dono.title}
            description={dono.description}
            imageSide={dono.imageSide}
            buttonTitle={dono.buttonTitle}
            buttonLink={dono.buttonLink}
          />
        </Fade>
      </Fragment>
    ));

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3">
        Donate
      </Typography>
      {/* <Container maxWidth='lg'> */}
      {renderDonations()}
      {/* </Container> */}
    </div>
  );
};

export default Donate;
