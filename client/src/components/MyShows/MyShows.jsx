import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import PageTitle from "../PageTitle";
import Results from "./Results"
import { Typography } from '@material-ui/core';
import { authContext } from "../AuthProvider";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  paperGradient: {
    background: theme.palette.background.paperGradient
  },
  root: {
    margin: "1% 5% 1% 5%"
  },
}));


export default function MyShows() {
  const { user } = useContext(authContext);
  const classes = useStyles();
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/users/${user.id}/shows`)
    .then((res) => {
      setResults(() => res.data)})
      .catch(e => console.log(e))
    }, [user.id])

  return (
    <div className={classes.root}>
        <PageTitle title={"My Shows"}/>
          {results.length === 0 &&
          <Typography>Looks kinda empty. Why not get started by searching for your favourite shows?</Typography>             
          }
    <Results results={results.length > 0? results : []} />
    </div>
  )
}