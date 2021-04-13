import React from "react";

import ShowImage from "../ShowImage";
import { Typography } from '@material-ui/core';

export default function Results(props) {
  const { results } = props;

  return results.map(show => {
    return (
    <React.Fragment>
      <ShowImage  imagesource={show.imageUrl}/>
    <Typography>{show.name}</Typography>
    </React.Fragment>
    );
  });
}

//key={album.collectionId} {...album}