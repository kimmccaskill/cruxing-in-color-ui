import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Opportunities from "./pages/Opportunities";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "95vh",
    backgroundColor: "#f5f5f5",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <NavBar />
      <Container className={classes.root} maxWidth={false} disableGutters>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/opportunities">
            <Opportunities />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
