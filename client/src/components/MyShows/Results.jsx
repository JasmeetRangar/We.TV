import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

  const handleClick = (id) => {
    history.push(`/shows/${id}`);
  };

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
          <Card className={classes.root} key={info.id}>
            <CardActionArea>
              <ListItem
                key={info.id}
                alignItems={"flex-start"}
                onClick={() => handleClick(info.id)}
              >
                <ListItemAvatar>
                  <ShowImage
                    imageSource={
                      info.image
                        ? info.image
                        : "https://media1.tenor.com/images/27c20af3fdf3806d059732caa8699ef0/tenor.gif"
                    }
                  />
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h6">{info.name}</Typography>
                  <Typography className={classes.descHover}>
                    {cardDescriptionFormatting(info.description)}
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
