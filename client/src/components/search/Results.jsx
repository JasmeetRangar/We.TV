import React from "react";

import ShowImage from "../ShowImage";
import { Typography, Button } from '@material-ui/core';
import axios from 'axios';



function clickHandler(show) {
  axios({
    method: 'post',
    url: 'http://localhost:3001/api/shows',
    data: {
      name: show.name,
      description: show.description,
      image: show.image,
      api_id: show.id
  }})
  .then((res) => console.log(res.data))
}

export default function Results(props) {
  const { results } = props;
  console.log(results);

  

  return results.map(info => {
    console.log("-------Here-------", info.show)
    return (
    <React.Fragment>
      
      <ShowImage key={info.show.id} imageSource={(info.show.image) ? info.show.image.medium : 'https://media1.tenor.com/images/27c20af3fdf3806d059732caa8699ef0/tenor.gif'} />
      <Typography>{info.show.name}</Typography>
      <Button onClick={() => clickHandler(info.show)}>Save the Show</Button>

     
    </React.Fragment>
    );
  });
}

//key={album.collectionId} {...album}