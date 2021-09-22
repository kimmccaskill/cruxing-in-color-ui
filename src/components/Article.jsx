import React from "react";
import {
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
    margin: theme.spacing(1),
  },
}));

const Article = (props) => {
  const { date, title, description = "", link = null } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{date}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
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
