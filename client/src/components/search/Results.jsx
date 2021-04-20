import React from "react";

import ShowImage from "../ShowImage";
import {
  Typography,
  List,
  ListItem,
  Card,
  ListItemAvatar,
  ListItemText,
  CardActionArea,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "2%",
  },
  resultsPaper: {
    width: "100%",
  },
  descHover: {
    opacity: "0",
    "&:hover": {
      opacity: "1",
    },
  },
}));

export default function Results(props) {
  const classes = useStyles();
  const history = useHistory();

  const { results } = props;

  async function clickHandler(show) {
    const dbCheck = await axios({
      method: "get",
      url: "/api/shows",
    });

    const shows = dbCheck.data;

    const filtShows = shows.filter((each) => each.api_id.toString() === show.id.toString());

    if (filtShows.length !== 0) {
      const id = filtShows[0].id;
      history.push(`/shows/${id}`);
    } else {
      const res = await axios({
        method: "post",
        url: "/api/shows",
        data: {
          name: show.name,
          description: show.summary,
          image: show.image.original,
          api_id: show.id,
        },
      });

      const url = `/shows/${res.data.id}`;
      history.push(url);
    }
  }

  const removeHtmlTags = (string) => {
    const regex = /(<([^>]+)>)/gi;
    if (string) {
      return string.replace(regex, "");
    }
    return "";
  };

  const cardDescriptionFormatting = (desc) => {
    if (!desc) {
      return;
    }
    const notags = removeHtmlTags(desc);
    return `${notags.slice(0, 87)}...`;
  };

  return (
    <List>
      {results.map((info) => {
        return (
          <Card className={classes.root} key={info.show.id}>
            <CardActionArea>
              <ListItem
                key={info.show.id}
                alignItems={"flex-start"}
                onClick={() => clickHandler(info.show)}
              >
                <ListItemAvatar>
                  <ShowImage
                    key={info.show.id}
                    imageSource={
                      info.show.image
                        ? info.show.image.medium
                        : "https://media1.tenor.com/images/27c20af3fdf3806d059732caa8699ef0/tenor.gif"
                    }
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h6">{info.show.name}</Typography>
                  <Typography className={classes.descHover}>
                    {cardDescriptionFormatting(info.show.summary)}
                  </Typography>
                </ListItemText>
              </ListItem>
            </CardActionArea>
          </Card>
        );
      })}
    </List>
  );
}
