import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImageWithDescBox from "../components/ImageWithDescBox";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "75vh",
  },
}));

const Opportunities = () => {
  const classes = useStyles();
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://strapi-cic.herokuapp.com/opportunities"
      );

      setOpportunities(result.data);
    };

    fetchData();
  }, []);

  const renderOpportunities = () =>
    opportunities.map((opportunity) => (
      <Fragment>
        <Fade bottom>
          <ImageWithDescBox
            src={opportunity.image}
            alt="Climbers"
            title={opportunity.title}
            description={opportunity.description}
            imageSide={opportunity.imageSide}
            buttonTitle={opportunity.buttonTitle}
            buttonLink={opportunity.buttonLink}
          />
        </Fade>
      </Fragment>
    ));

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h3">
        Opportunities
      </Typography>
      {renderOpportunities()}
    </div>
  );
};

export default Opportunities;
