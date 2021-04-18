import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Results from "./Results"
import { Typography, Paper } from '@material-ui/core';
import { authContext } from "../AuthProvider";


export default function MyShows() {
  const { user } = useContext(authContext);

  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/users/${user.id}/shows`)
    .then((res) => {
      // console.log(res.data)
      setResults(() => res.data)})
      .catch(e => console.log(e))
    }, [])

  return (
    <React.Fragment>
      <Paper
            elevation={4}
            // style={{ color: "white", background: "black" }}
          >
    <Typography variant="h2">My Shows</Typography>
          </Paper>
          {results.length === 0 &&
          <Typography>Looks kinda empty. Why not get started by searching for your favourite shows?</Typography>             
          }
    <Results results={results.length > 0? results : []} />
    </React.Fragment>
  )
}