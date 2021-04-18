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
  Avatar,
  CardActionArea
} from "@material-ui/core";
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  resultsPaper: {
    width: "100%"
  }
}));

export default function Results(props) {
  const classes = useStyles();
  const history = useHistory();
  const { results } = props;
  // console.log("👉🏻",results)

  const handleClick = (id) => {
    history.push(`/shows/${id}`)
  }

  return (
    <List>
      {results.map((info) => {
        // console.log("-------Here-------", info)
        return (
          <Card>
            <CardActionArea>
            <ListItem
            key={info.id}
            alignItems={"flex-start"}
            onClick={() => handleClick(info.id)}
            >
              <ListItemAvatar>
                {/* <Avatar alt={info.name} src={info.image} /> */}
                <ShowImage
                  imageSource={
                    info.image
                      ? info.image
                      : "https://media1.tenor.com/images/27c20af3fdf3806d059732caa8699ef0/tenor.gif"
                  }
                />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h4">{info.name}</Typography>
              </ListItemText>
            </ListItem>
            </CardActionArea>
          </Card>
        );
      })}
    </List>
  );
}

//key={album.collectionId} {...album}
