import React from "react";
import { TextField, Grid, IconButton, FormControl } from "@material-ui/core";
import { 
  PhotoCamera,
  Movie
 } from "@material-ui/icons";
//  import MovieIcon from '@material-ui/icons/Movie';

export default function InputArea() {
  return (
    <FormControl>
      <TextField
        id="standard-textarea"
        label="Comment"
        placeholder="Add Comment"
        multiline
        style={{width:"95%"}}
      />
     
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        
          <IconButton
            color="primary"
            aria-label="upload video"
            component="span"
          >
            <Movie />
          </IconButton>
       
    </FormControl>
  );
}
