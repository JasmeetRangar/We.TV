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
  const { name, description, image_url } = props;
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
            src={image_url}
            // cover="true"
            style={{width:"100%"}}
          />
            <Typography variant="h2">{name}</Typography>
            <Typography>{description}</Typography>
            <ShowNav />
          </Paper>
        </div>
      </Box>
    </React.Fragment>
  );
}
