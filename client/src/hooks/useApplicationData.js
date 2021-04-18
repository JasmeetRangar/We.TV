import { createContext, useState, useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";
import axios from "axios";



export default function useApplicationData(showId, userId) {
  // const [state, dispatch] = useReducer(dataReducer, {
  //   users: [],
  //   posts: [],
  //   loading: true,
  // });
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
      // axios.get('/api/interviewers')
    ]).then(all => {
      setState(prev => ({...prev, users: all[0].data, posts: all[1].data, comments: all[2].data, oldChat: all[3].data, favourites: all[4].data}))
    })
    
  }, [userId, showId])
  
  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "/api/users",
  //   })
  //     .then(({ data }) => {
  //       console.log(data);
  //       dispatch({
  //         type: SET_USERS,
  //         users: data,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
 
 

  return {
    state, 
    setState,
  };
};
