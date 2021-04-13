import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import Image from "material-ui-image";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paperClass: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function ShowImage(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <Paper className={classes.paperClass} elevation={1} square={false} style={{ background:'linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,1))'}}>
        
        <Image
          src={props.imageSource}
          cover="true"
          style={{width:'90%'}}
        />
        {/* <img alt="" style={{width:'90%'}} src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1591219012l/40881621._SX318_.jpg"></img> */}
      </Paper>
    </div>
  );
};