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
  Dialog,
  DialogContent,
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
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const {comments} = props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

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
                    onClick={handleClickOpen}
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
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              classes={classes.transparentBG}
            >
              <DialogContent>
                <img
                    alt="ggg"
                    src={comment.image}
                    style={{ height: "auto", width: "500px" }}
                  ></img>
              </DialogContent>
            </Dialog>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
}
