import React from "react";
import {
  Grid,
  IconButton,
  FormControl,
  InputAdornment,
  Input
   } from "@material-ui/core";
import { PhotoCamera, Movie, ArrowForward } from "@material-ui/icons";

export default function InputArea() {
  return (
    <FormControl style={{width:"95%"}}>
      <Input
        id="standard-textarea"
        label="Comment"
        placeholder="Add Comment"
        multiline
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <ArrowForward/>
            </IconButton>
          </InputAdornment>
        }
      />
      <Grid container>
        <Grid item>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            aria-label="upload video"
            component="span"
          >
            <Movie />
          </IconButton>
        </Grid>
      </Grid>
    </FormControl>
  );
}
