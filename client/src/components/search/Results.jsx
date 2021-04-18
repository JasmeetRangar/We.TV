import React, {useEffect} from "react";

import ShowImage from "../ShowImage";
import { Typography, Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




export default function Results(props) {

  const history = useHistory();

  const { results } = props;
  console.log(results);

  async function clickHandler(show) {
    console.log(show);

    const dbCheck = await axios({
      method: 'get',
      url: '/api/shows'
    })  

    // console.log("========>=====>=====>>>>>>>>>",dbCheck)
    // console.log(res.data);
    
    const shows = dbCheck.data
    
    const filtShows = shows.filter((each) => each.api_id == show.id)

    if (filtShows.length !== 0) {
      const id = filtShows[0].id
      history.push(`/shows/${id}`)
    } else {
    
    const res = await axios({
      method: 'post',
      url: '/api/shows',
      data: {
        name: show.name,
        description: show.summary,
        image: show.image.original,
        api_id: show.id
    }})

    const url = `/shows/${res.data.id}`
    history.push(url);
    }
  }
  

  

  return results.map(info => {
    // console.log("-------Here-------", info.show)
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