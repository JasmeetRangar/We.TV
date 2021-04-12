import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Badge,
  IconButton,
} from "@material-ui/core";
import Image from 'material-ui-image';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
}));

// Comment component modified from Gunasai's git repo: https://github.com/gunasai/material-ui-comments

export default function Comment({ comments }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.name}
                  </Typography>
                }
                secondary={
                  <>
                    <Image
                      src={`https://amazinganimalphotos.com/wp-content/uploads/2014/11/funny-polar-bear-meme-.jpg`}
                      cover = 'true'
                      disableSpinner
                    />
                    {comment.body}
                    <br></br>
                    <IconButton aria-label="like post">
                      <Badge badgeContent={4} color="primary">
                        <ThumbUpIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="dislike post">
                      <Badge badgeContent={4} color="primary">
                        <ThumbDownIcon />
                      </Badge>
                    </IconButton>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
}
