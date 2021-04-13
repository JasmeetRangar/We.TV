import React, { useState, useEffect } from "react";
import SearchBar from './SearchBar';
import Results from './Results';
const axios = require('axios');

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
      name: 'Girls',
      image: {
        medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg'
      }
  }}]



export default function Search(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (term) {

      const testURL = `http://api.tvmaze.com/search/shows?q=${term}`;
      axios.get(testURL).then(response => {
        //console.log(response.data);
        setResults([...response.data])
      })
      .catch(e => console.log(e));
    }
  }, [term])
  return (
    <React.Fragment>
      <SearchBar onSearch={term => setTerm(term)} />
      <Results results={results.length > 0? results : data} />
    </React.Fragment>
  )
}
