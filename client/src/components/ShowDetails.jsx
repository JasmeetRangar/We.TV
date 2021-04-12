import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import ShowBanner from './ShowBanner';


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

export default function ShowDetails() {
  const classes = useStyles();

  return (
    <div className={classes.paperClass}>
      <div style={{width: '40%'}}>
        <ShowBanner />
      </div>
      <div className={classes.showDetails} style={{width: '40%'}}>
        <Paper elevation={1} style={{color:"white", background:'black', height: '80%'}}>
          The Book of Disquiet
        </Paper>
        <Paper elevation={1} style={{backgroundColor:"black", color:"white"}}>
          Fernando Pessoa
        </Paper>
      </div>
        
      
    </div>
    

  );

};