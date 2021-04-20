import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Fab } from "@material-ui/core";
import { Add, Remove} from "@material-ui/icons";
import ShowNav from "./ShowNav";
import Image from "material-ui-image";
import { useState, useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1% 5% 1% 5%"
  },
  bannerPaper:{
    background: "transparent",
    border: "none"
  },
  bannerText:{
    background: "radial-gradient(circle, rgba(76,124,251,0.5) 0%, rgba(255,255,255,0) 100%)",
    border: "1px solid white",
    borderOpacity: "0.7",
    borderRadius: "5px",
    marginTop: "2%"
  },
  fabEdit: {
    zIndex: "10",
    margin: "1em 1em 0 0",
    float: "right",
    textAlign: "right",
    opacity: "75%",
    '&:hover': {
      opacity: "100%",
   },
  }
}));

export default function ShowBanner(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    show: [{}],
  });

  const { favourites, transitionToChat, viewChat, updateFavourite } = props;

  const removeHtmlTags = (string) => {
    const regex = /(<([^>]+)>)/gi;
    if (string) {
      return string.replace(regex, "");
    }
    return "";
  };

  useEffect(() => {
    axios.get(`/api/shows/${props.id}`).then((showInfo) => {
      setState((prev) => ({ ...prev, show: showInfo.data }));
    });
  }, [props.id]);


  return (
    <div className={classes.root}>
      <Box className={classes.bannerBox}>
        <div className={classes.showDetails}>
          {(favourites.length === 0) || (favourites && !favourites.is_active) ? (
            <Fab
            color="primary"
            onClick={updateFavourite}
            className={classes.fabEdit}
            >
              <Add />
            </Fab>
          ) : (
            <Fab
            color="secondary"
            onClick={updateFavourite}
            className={classes.fabEdit}
            >
              <Remove />
            </Fab>
          )}

          <Paper 
            elevation={4}
            className={classes.bannerPaper}
            >
            <Image
              src={state.show[0].image}
              cover="true"
            />
            <div className={classes.bannerText}>

            <Typography variant="h2">{state.show[0].name}</Typography>

            <Typography>{removeHtmlTags(state.show[0].description)}</Typography>

            <ShowNav
              transitionToChat={transitionToChat}
              viewChat={viewChat}
              />
              </div>
          </Paper>
        </div>
      </Box>
    </div>
  );
}
