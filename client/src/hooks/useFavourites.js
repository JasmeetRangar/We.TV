import { useState, useEffect, } from "react";
import axios from "axios";

export default function useFavourites(userid, showid) {
  
  return axios.put(`api/${userid}/favourites/${showid}`)
        .then(res => res)
  
}


// Just return whatever the result of the axios is.
// Don't update state to that here,
// Do that IN THE parent component
// So like in Show, do like setState((prev) => {favourites: useFavourites(userId, showId)})