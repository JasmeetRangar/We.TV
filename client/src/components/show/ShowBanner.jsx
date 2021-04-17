import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
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


  useEffect(()=> {
   
    axios.get(`/api/shows/${props.id}`)
    .then(showInfo => { 
      setState(prev => ({...prev, show:showInfo.data}))});
  
  }, [])

  console.log("this the state",state.show[0])
  
  return (
    <React.Fragment>
      <Box className={classes.bannerBox}>
        {/* <Paper className={classes.imageBannerPaper} elevation={4}>
        <Image
            src={image_url}
            cover="true"
            style={{width:"100%"}}
          />
        </Paper> */}
        <div className={classes.showDetails}>
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
            <Typography>{state.show[0].description}</Typography>
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
