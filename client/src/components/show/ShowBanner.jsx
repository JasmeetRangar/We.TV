import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box, Fab } from "@material-ui/core";
import { Add, Remove, StarRounded, StarBorderRounded } from "@material-ui/icons";
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
    justifyContent: "center",
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
  fabEdit: {
    zIndex: "10",
    position: "relative",
    top: "5.5em",
    left: "14.2em",
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

  console.log("this the state", state.show[0]);

  return (
    <React.Fragment>
      <Box className={classes.bannerBox}>
        <div className={classes.showDetails}>
          {(favourites.length === 0) || (favourites && !favourites.is_active) ? (
            <Fab
            // variant="extended" 
            color="primary"
            onClick={updateFavourite}
            className={classes.fabEdit}
            >
              <Add />
              {/* <StarBorderRounded /> */}
            </Fab>
          ) : (
            <Fab
            // variant="extended"
            color="secondary"
            onClick={updateFavourite}
            className={classes.fabEdit}
            >
              <Remove />
              {/* <StarRounded /> */}
            </Fab>
          )}

          <Paper elevation={4}>
            <Image
              src={state.show[0].image}
              cover="true"
              style={{ width: "100%" }}
            />
            <Typography variant="h2">{state.show[0].name}</Typography>

            <Typography>{removeHtmlTags(state.show[0].description)}</Typography>

            <ShowNav
              transitionToChat={transitionToChat}
              viewChat={viewChat}
            />
          </Paper>
        </div>
      </Box>
    </React.Fragment>
  );
}
