import { useState, useEffect } from "react";
import axios from "axios";



export default function useApplicationData(showId, userId) {
  
  const [state, setState] = useState({
    users: [],
    posts: [],
    comments:[],
    oldChat: [],
    favourites: []
  });
  useEffect(()=> {
    Promise.all([
      axios.get('/api/users'),
      axios.get(`/api/posts/${showId}`),
      axios.get('/api/comments'),
      axios.get(`/api/shows/${showId}/chat`),
      axios.get(`/api/users/${userId}/favourites/${showId}`)
    ]).then(all => {
      setState(prev => ({...prev, users: all[0].data, posts: all[1].data, comments: all[2].data, oldChat: all[3].data, favourites: all[4].data}))
    })
    
  }, [userId, showId])
  
  return {
    state, 
    setState,
  };
};
