import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Organizer from "../components/Organizer";
import Logo from "../images/logo-no-words.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  intro: {
    margin: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  logo: {
    height: "100%",
  },
}));

const About = () => {
  const [organizers, setOrganizers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://strapi-cic.herokuapp.com/organizers");

      setOrganizers(result.data);
    };

    fetchData();
  }, []);

  const renderOrganizers = () =>
    organizers.map((org) => (
      <Fragment>
        <Organizer
          name={org.name}
          description={org.description}
          src={org.img}
        />
      </Fragment>
    ));

  return (
    <Container className={classes.root} maxWidth="lg">
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={Logo} alt="Cruxing in Color" />
      </div>
      <Typography className={classes.intro} align="center" variant="h6">
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
      {renderOrganizers()}
    </Container>
  );
};

export default About;
