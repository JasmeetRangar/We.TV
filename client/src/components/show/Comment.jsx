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

import Image from "material-ui-image";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
  transparentBG: {
    background: "transparent"
  }
}));

// Comment component modified from Gunasai's git repo: https://github.com/gunasai/material-ui-comments

export default function Comment(props) {
  const classes = useStyles();
  const {comments} = props

  return (
    <List className={classes.root}>
      {comments.map((comment, index) => {


        function commentLikeHandler() {
          props.commentLikeHandler(comment.id, index)
        }

        function commentDisLikeHandler() {
          props.commentDisLikeHandler(comment.id, index)
        }

        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar aria-label="recipe" src={comment.profile_pic} className={classes.avatar}>
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
                  {comment.image && 
                    <Image
                    src={comment.image}
                    cover="true"
                    disableSpinner
                    />
                  }
                    {comment.text}
                    <br></br>
                    <IconButton aria-label="like post">
                      <Badge badgeContent={comment.likes} color="primary">
                        <ThumbUpIcon onClick={commentLikeHandler} />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="dislike post">
                      <Badge badgeContent={comment.dislikes} color="primary">
                        <ThumbDownIcon onClick={commentDisLikeHandler} />
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
