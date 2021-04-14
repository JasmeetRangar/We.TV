import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowBanner from "./ShowBanner";
import PostsList from "./PostsList";
import Box from "@material-ui/core/Box"

const testShow = {
  id: 1,
  name: "Watchmen",
  description: "Who watches the watchmen?",
  image_url: "https://cdn.collider.com/wp-content/uploads/2019/12/watchmen-poster.jpg"
}

const useStyles = makeStyles(() => ({
  show: {
    // margin: "2%"
  },
}));

export default function Show(props) {
  const {name, description, image_url} = testShow
  const classes = useStyles();
  return (
    <React.Fragment className={classes.show}>
      <Box className={classes.show}>
      <ShowBanner 
        name={name}
        description={description}
        image_url={image_url}
        />
      <PostsList />
        </Box>
    </React.Fragment>
  );
}
