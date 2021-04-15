import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputArea from "../InputArea";



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

  



  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>What's on your mind?</Typography>
        <InputArea onSubmit={props.onSubmit}/>
      </CardContent>
    </Card>
  );
}
