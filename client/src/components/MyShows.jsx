import React, { useState } from "react";

import Results from "./search/Results"
import { Typography, Paper } from '@material-ui/core';

const data = 
 [{
    show: {
      name: 'Girls',
      image: {
       medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
      }
  }
}
  ,{
    show: {
      name: 'Boys',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/267/668204.jpg'
      }
  }}]

export default function MyShows() {
  const [results, setResults] = useState([]);
  
  return (
    <React.Fragment>
      <Paper
            elevation={4}
            style={{ color: "white", background: "black" }}
          >
    <Typography variant="h1">My Shows</Typography>
          </Paper>
    <Results results={results.length > 0? results : data} />
    </React.Fragment>
  )
}