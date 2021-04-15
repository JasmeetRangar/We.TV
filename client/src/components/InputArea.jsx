import React from "react";
import {
  Grid,
  IconButton,
  FormControl,
  InputAdornment,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PhotoCamera, Movie, ArrowForward } from "@material-ui/icons";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

export default function InputArea(props) {

  const [post,setPost] = useState('');

  const classes = useStyles();

  // const id = props.id;

  function onSubmit() {
    console.log(post);
    props.onSubmit(post);
    setPost('');
  }


  

  return (
    <FormControl style={{ width: "95%" }} >
      <Input
        autoFocus="true"
        type="reset"
        id="standard-textarea"
        value={post}
        onChange={(evt) => setPost(evt.target.value)}
        label="Comment"
        placeholder="Add Post"
        multiline
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onSubmit}>
              <ArrowForward />
            </IconButton>
          </InputAdornment>
        }
      />
      <Grid container>
        <Grid item>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <Grid item>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload video"
              component="span"
            >
              <Movie />
            </IconButton>
          </label>
        </Grid>
      </Grid>
    </FormControl>
  );
}
