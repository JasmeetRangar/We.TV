import { useState, useEffect, } from "react";
import { createContext, useState, useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";
import axios from "axios";



export default function useApplicationData(id) {
  // const [state, dispatch] = useReducer(dataReducer, {
  //   users: [],
  //   posts: [],
  //   loading: true,
  // });
  const [state, setState] = useState({
    users: [],
    posts: [],
    comments:[],
    oldChat: []
  });
  useEffect(()=> {
    Promise.all([
      axios.get('/api/users'),
      axios.get(`/api/posts/${id}`),
      axios.get('/api/comments'),
      axios.get(`/api/shows/${id}/chat`)
      // axios.get('/api/interviewers')
    ]).then(all => {
      setState(prev => ({...prev, users: all[0].data, posts: all[1].data, comments: all[2].data, oldChat: all[3].data}))
    })
    
  }, [id])
  
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
