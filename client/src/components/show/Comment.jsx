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
  DialogContentText
} from "@material-ui/core";

import Image from "material-ui-image";
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
                  {comment.image_url && 
                    <Image
                    src={comment.image_url}
                    cover="true"
                    onClick={handleClickOpen}
                    disableSpinner
                    />
                  }
                    {comment.body}
                    <br></br>
                    <IconButton aria-label="like post">
                      <Badge badgeContent={comment.likes} color="primary">
                        <ThumbUpIcon />
                      </Badge>
                    </IconButton>
                    <IconButton aria-label="dislike post">
                      <Badge badgeContent={comment.dislikes} color="primary">
                        <ThumbDownIcon />
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
                    src={comment.image_url}
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
