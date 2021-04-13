import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from '@material-ui/core';
import ShowImage from './ShowImage';


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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  showDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
    flexWrap: 'wrap',
  }
}));

export default function ShowBanner(props) {
  const classes = useStyles();
  const {name, description, image_url} = props
  return (
    <div className={classes.paperClass}>
      <div style={{width: '40%'}}>
        <ShowImage imageSource={image_url}/>
      </div>
      <div className={classes.showDetails} style={{width: '40%'}}>
        <Paper elevation={1} style={{color:"white", background:'black', height: '80%'}}>
          <Typography>{name}</Typography> 
        </Paper>
        <Paper elevation={1} style={{backgroundColor:"black", color:"white"}}>
          <Typography>{description}</Typography> 
        </Paper>
      </div>
        
      
    </div>
    

  );

};