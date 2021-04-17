import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Fab } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons"
import ShowNav from "./ShowNav";
import Image from "material-ui-image";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  bannerBox: {
    display: "flex",
    justifyContent: "center"
  },
  showDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    flexWrap: "wrap",
  },
  showBannerBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default function ShowBanner(props) {
  const classes = useStyles();
  

  const [state, setState] = useState({
   
    show: [{}],
  });

  const removeHtmlTags = (string) => {
    const regex = /(<([^>]+)>)/ig;
    if (string) {
      return(string.replace(regex, ""));
    }
    return "";
}


  useEffect(()=> {
   
    axios.get(`/api/shows/${props.id}`)
    .then(showInfo => { 
      setState(prev => ({...prev, show:showInfo.data}))});
  
  }, [props.id])

  console.log("this the state",state.show[0])
  
  return (
    <React.Fragment>
      <Box className={classes.bannerBox}>
        <div className={classes.showDetails}>
            <Fab variant="extended" color="primary">
              <Add />
              Add to Favourites
            </Fab>
            <Fab variant="extended" color="secondary">
              <Remove />
              Remove from Favourites
            </Fab>
          <Paper
            elevation={4}
            style={{ color: "white", background: "black" }}
          >

          <Image
            src={state.show[0].image}
            cover="true"
            style={{width:"100%"}}


          />
            <Typography variant="h2">{state.show[0].name}</Typography>
           
              <Typography>{removeHtmlTags(state.show[0].description)}</Typography>
            
            <ShowNav 
            transitionToChat={props.transitionToChat}
            viewChat={props.viewChat}
            />
          </Paper>
        </div>
      </Box>
    </React.Fragment>
  );
}
