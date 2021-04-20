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
  const { imageSource} = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paperClass} elevation={1} square={false} style={{ background:'linear-gradient(to top, rgba(255,0,0,0), rgba(255,0,0,1))'}}>
        
        <Image
          src={imageSource}
          cover="true"
          style={{width:'90%'}}
        />
      </Paper>
    </div>
  );
};