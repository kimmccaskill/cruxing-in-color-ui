import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Organizer from "../components/Organizer";

const useStyles = makeStyles((theme) => ({
  root: {},
  intro: {
    margin: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
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
      <Organizer
        name="Shara Zaia"
        description="Shara Zaia is a 30 year old Assyrian American climber, educator, and community organizer
          based in Denver, CO. Professionally, she has spent the last 8 years building early childhood classrooms that aim to help our 
          country’s youngest learners feel represented and valued. For Shara, climbing is about connecting with herself, with others, and 
          with nature. Access to the sport has given her a chance to challenge her deep rooted imposter syndrome and wrestle with her own 
          fears. Most importantly, climbing has given her a community of people without which it felt difficult to survive. Her dream is to 
          air her passions for education and the outdoors in an effort to break down barriers within the sport so that everyone can experience 
          the mental, physical, and emotional benefits. Shara is the CIC founder and runs social media and communications and enjoys connecting
          with new climbers! She was recently selected for the Scarpa AMI and will be spending a year accessing resources to share with her
          CIC family."
        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Organizer
        name="Menesha Mannapperuma"
        description="Menesha is a Sri Lankan-American woman who has been climbing for around ten years. She 
          primarily boulders and started climbing in California followed by a move to Colorado four years ago. 
          Professionally, she’s a former lawyer turned product manager who is passionate about finding the optimal 
          balance between climbing and career. Menesha is excited to see climbing diversify and think it’s important 
          to build a space for climbers of color to connect. When she first started climbing (and when she moved to 
          Colorado), it was hard for her to find and climb with other people of color. Through organizing Cruxing in 
          Color, she hopes to work to make it easier and less intimidating for other climbers of color to access 
          climbing culture and opportunities."
        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Organizer
        name="Enrique Tovar"
        description="Enrique Tovar is a Peruvian-American climber, routesetter and climbing coach. He serves 
          Cruxing in Color as one of its primary organizers and uses his occupation to leverage gym meetups, 
          connections and video content. When routesetting, he uses it as an opportunity to express himself 
          creatively while also being empathetic of climbers of different sizes and skill sets. This career has 
          allowed him to see the wide spectrum of insecurities and egos in climbers and has given him valuable 
          insight as to how challenging and intimidating it can be to approach climbing for the first time. 
          Especially given that this is a sport that is primarily dominated by white populations. His hope is that 
          by creating a safe and welcoming space Cruxing in Color can bring more diversity to the climbing world. 
          Ultimately, he is driven by the communal psych that comes with the sport and sees these meetups as an 
          opportunity to share compassion, connection and inspiration with his fellow POC."
        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </Container>
  );
};

export default About;
