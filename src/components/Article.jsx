import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "300px",
    height: "200px",
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const Article = (props) => {
  const { date, title, description = "", link = null } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body1" component="div">
          <Box fontWeight="fontWeightMedium">{title}</Box>
        </Typography>
        <Typography variant="body2">{date}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            Read More
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Article;
