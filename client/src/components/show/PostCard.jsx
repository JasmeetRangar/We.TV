import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { red } from "@material-ui/core/colors";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Comment from "./Comment";
import InputArea from "../InputArea";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: "40%",
    marginTop: "1%",
    marginBottom: "1%",
    margin: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PostCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [state, setState] = useState({
   
    comments: [],
  });


  useEffect(()=> {
   
    axios.get(`/api/posts/${post.id}`)
    .then(commentsFrom => {
      setState(prev => ({...prev, comments:commentsFrom.data}))});
  
  }, [])

  const { post } = props;

  console.log("💦", post);
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} alt={"User_Name"}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="UserName"
        subheader={post.created_at}
      />
      {post.image_url && (
        <CardMedia
          className={classes.media}
          image={post.image_url}
          title="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like post">
          <Badge badgeContent={post.likes} color="primary">
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="dislike post">
          <Badge badgeContent={post.dislikes} color="primary">
            <ThumbDownIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <InputArea />
          <Comment comments={state.comments} />
        </CardContent>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </Collapse>
    </Card>
  );
}