import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import Results from "./Results"
import { Typography, Paper } from '@material-ui/core';
import { authContext } from "../AuthProvider";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paperGradient: {
    background: theme.palette.background.paper
  },
}));


export default function MyShows() {
  const { user } = useContext(authContext);
  const classes = useStyles();
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
        className={classes.paperGradient}
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