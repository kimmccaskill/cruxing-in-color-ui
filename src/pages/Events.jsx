import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HeaderImage from "../components/HeaderImage";
import Event from "../components/Event";
import image from "../images/events-img.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  mission: {},
  title: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  eventsContainer: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      paddingLeft: theme.spacing(2),
    },
  },
}));

const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://strapi-cic.herokuapp.com/events");

      setEvents(result.data);
    };

    fetchData();
  }, []);

  const renderEvents = () => {
    const today = DateTime.local();
    const pastEvents = [];
    const futureEvents = [];
    const sortedEvents = events.sort((a, b) =>
      a.date < b.date ? -1 : a.date > b.date ? 1 : 0
    );

    sortedEvents.forEach((event) => {
      const dt = DateTime.fromISO(event.date);
      if (today.startOf("day") > dt.startOf("day")) {
        pastEvents.push(event);
      } else {
        futureEvents.push(event);
      }
    });

    return (
      <Container className={classes.root} maxWidth="lg">
        <Typography className={classes.title} variant="h4" gutterBottom>
          Upcoming Events
        </Typography>
        <div className={classes.eventsContainer}>
          {futureEvents.map((event) => {
            const date = DateTime.fromISO(event.date);
            console.log("DATE", date);
            return (
              <Event
                date={date.toLocaleString(DateTime.DATE_FULL)}
                time={date.toLocaleString(DateTime.TIME_SIMPLE)}
                title={event.title}
                location={event.location}
              />
            );
          })}
          {futureEvents.length === 0 && (
            <Typography>
              There aren't any upcoming events. Be sure to check back soon!
            </Typography>
          )}
        </div>
        <Typography className={classes.title} variant="h4" gutterBottom>
          Past Events
        </Typography>
        <div className={classes.eventsContainer}>
          {pastEvents
            .map((event) => {
              const date = DateTime.fromISO(event.date);
              return (
                <Event
                  date={date.toLocaleString(DateTime.DATE_FULL)}
                  title={event.title}
                  location={event.location}
                  buttonTitle={event.buttonTitle}
                  buttonLink={event.buttonLink}
                />
              );
            })
            .reverse()}
        </div>
      </Container>
    );
  };

  return (
    <Container className={classes.root} maxWidth={false}>
      <HeaderImage src={image} alt="Group of CiC members" />
      <Container className={classes.mission} maxWidth="md">
        {renderEvents()}
      </Container>
    </Container>
  );
};

export default Events;
