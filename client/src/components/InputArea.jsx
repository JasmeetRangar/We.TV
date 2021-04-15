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

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

export default function InputArea() {
  const classes = useStyles();

  return (
    <FormControl style={{ width: "95%" }}>
      <Input
        id="standard-textarea"
        label="Comment"
        placeholder="Add Post"
        multiline
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
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
