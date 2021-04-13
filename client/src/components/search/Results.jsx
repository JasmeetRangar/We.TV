import React from "react";

import ShowImage from "../ShowImage";
import { Typography } from '@material-ui/core';

export default function Results(props) {
  const { results } = props;
  console.log(results)
  return results.map(info => {
    console.log("-------Here-------", info.show)
    return (
    <React.Fragment>
     <ShowImage imageSource={(info.show.image) ? info.show.image.medium : 'https://media1.tenor.com/images/27c20af3fdf3806d059732caa8699ef0/tenor.gif'}/>
    <Typography>{info.show.name}</Typography>
    </React.Fragment>
    );
  });
}

//key={album.collectionId} {...album}