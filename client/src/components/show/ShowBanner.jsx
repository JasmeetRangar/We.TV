import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Box } from "@material-ui/core";
import ShowImage from "../ShowImage";
import ShowNav from "./ShowNav";
import Image from "material-ui-image";

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
  paperClass: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  showDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
    flexWrap: "wrap",
  },
  imageBannerPaper: {
    marginBottom: "2%",
  },
}));

export default function ShowBanner(props) {
  const classes = useStyles();
  const { name, description, image_url } = props;
  return (
    <React.Fragment>
      <Box>
        <Paper className={classes.imageBannerPaper} elevation={4}>
          <Image
            src={image_url}
            cover="true"
            // style={{height:"100%"}}
          />
        </Paper>
        <div className={classes.showDetails}>
          <Paper
            elevation={4}
            style={{ color: "white", background: "black", height: "80%" }}
          >
            <Typography variant="h1">{name}</Typography>
            <Typography>{description}</Typography>
            <ShowNav />
          </Paper>
        </div>
      </Box>
    </React.Fragment>
  );
}
