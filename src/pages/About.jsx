import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Organizer from "../components/Organizer";
import Article from "../components/Article";
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
  list: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

const About = () => {
  const [organizers, setOrganizers] = useState([]);
  const [articles, setArticles] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchOrganizers = async () => {
      const result = await axios("https://strapi-cic.herokuapp.com/organizers");

      setOrganizers(result.data);
    };
    const fetchArticles = async () => {
      const articleResults = await axios(
        "https://strapi-cic.herokuapp.com/articles"
      );
      setArticles(articleResults.data);
    };
    fetchOrganizers();
    fetchArticles();
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

  const renderArticles = () => {
    return (
      <Fragment>
        <Typography align="center" variant="h6">
          Read about us!
        </Typography>
        <div className={classes.cards}>
          {articles.map((article) => (
            <Article
              title={article.title}
              date={article.date}
              description={article.description}
              link={article.link}
            />
          ))}
        </div>
      </Fragment>
    );
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={Logo} alt="Cruxing in Color" />
      </div>
      <Typography className={classes.intro} align="center" variant="h6">
        <Box>
          CIC was born out of a small meetup group organized by Jalen Bazile
          called Melanin Climbers of Colorado that began connecting in December
          2019. In September 2020, Shara revived and rebranded the account as
          Cruxing in Color and paired up with Menesha and Enrique. Since then,
          CIC has expanded its vision and reach and the group has been hosting
          meetups around the greater Denver area averaging around 60 to 80
          climbers a night.
        </Box>
      </Typography>
      <Typography align="center" variant="h6">
        <Box>In less than a year, what have we been up to?</Box>
      </Typography>
      <div className={classes.list}>
        <Typography>
          <Box sx={{ textAlign: "center" }}>
            <ul>
              <li>
                Offering gym membership scholarships for underrepresented
                climbers
              </li>
              <li>
                Partnering with industry leaders to provide our community with
                high quality gear
              </li>
              <li>
                Amplifying BIPOC voices by highlighting climbers of all levels
                in our community
              </li>
              <li>
                Hosting monthly meetups and clinics at gyms including discounted
                day rates and free rentals
              </li>
              <li>
                Leveraging Q&As and "Terminology Tuesday" to democratize
                information access{" "}
              </li>
              <li>Organizing stewardship days at local crags </li>
              <li>
                Helping new climbers transition from gym to crag (Catch us at
                Shelf Road Craggin'!)
              </li>
            </ul>
          </Box>
        </Typography>
      </div>
      {articles.length > 0 && renderArticles()}
      {renderOrganizers()}
    </Container>
  );
};

export default About;
