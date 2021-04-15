import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputArea from "../InputArea";
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: "40%",
    marginTop: "1%",
    marginBottom: "1%",
    margin: "auto"
  },
}));

export default function PostInput(props) {

  function onSubmit(post) {
    console.log('Line 20 PostInput.jsx', post);
    console.log(props.id)
    axios({
      method: 'post',
      url: '/api/posts',
      data: {
        text: post,
        show_id: props.id
    }})
    .then(() => console.log('post added'))
  }



  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>What's on your mind?</Typography>
        <InputArea onSubmit={onSubmit}/>
      </CardContent>
    </Card>
  );
}
