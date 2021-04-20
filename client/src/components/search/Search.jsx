import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Results from './Results';
import PageTitle from '../PageTitle';
import { makeStyles } from "@material-ui/core/styles";
const axios = require('axios');



const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1% 5% 1% 5%"
  },
}));


export default function Search(props) {
  const classes = useStyles();
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (term) {

      const testURL = `http://api.tvmaze.com/search/shows?q=${term}`;
      axios.get(testURL).then(response => {
        setResults([...response.data])
      })
      .catch(e => console.log(e));
    }
  }, [term])
  return (
    <div className={classes.root}>
      <PageTitle title={"Search Shows"}></PageTitle>
      <SearchBar onSearch={term => setTerm(term)} />
      <Results results={results.length > 0? results : []} />
    </div>
  )
}
