import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputArea from "../InputArea";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: "40%",
    marginTop: "1%",
    marginBottom: "1%"
  },
}));

export default function PostInput() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>What's on your mind?</Typography>
        <InputArea />
      </CardContent>
    </Card>
  );
}
