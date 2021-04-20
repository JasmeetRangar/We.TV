import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputArea from "../InputArea";




const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1% 5% 1% 5%"
  },
}));

export default function PostInput(props) {

  



  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>What's on your mind?</Typography>
        <InputArea onSubmit={props.onSubmit} upload={props.upload} uploadHandler={props.uploadHandler}/>
      </CardContent>
    </Card>
  );
}
