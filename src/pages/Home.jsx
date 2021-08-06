import React from "react";
import { Container, Typography, Paper } from "@material-ui/core";
import createDOMPurify from "dompurify";
import { makeStyles } from "@material-ui/core/styles";
import HeaderImage from "../components/HeaderImage";
import groupImg from "../images/home-img.png";

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
const DOMPurify = createDOMPurify(window);
const instagramFeed = `<div class="embedsocial-hashtag" data-ref="b9199a7137a730ec4503ba7871936a60dcbec424" ><a class="feed-powered-by-es" href="https://embedsocial.com/products/embedfeed/" target="_blank" title="Powered by EmbedSocial">Powered by EmbedSocial<span>→</span></a></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js);}(document, "script", "EmbedSocialHashtagScript"));</script>`;

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
      {
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(instagramFeed),
          }}
        />
      }
    </Container>
  );
};

export default Home;
