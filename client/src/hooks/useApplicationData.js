import { useState, useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";
import axios from "axios";

export default function useApplicationData() {
  // const [state, dispatch] = useReducer(dataReducer, {
  //   users: [],
  //   posts: [],
  //   loading: true,
  // });
  const [state, setState] = useState({
    users: [],
    posts: [],
    comments: [],
  })

  useEffect(()=> {
    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/posts'),
      axios.get('/api/comments'),
      // axios.get('/api/interviewers')
    ]).then(all => {
      setState(prev => ({...prev, users: all[0].data, posts: all[1].data, comments: all[2].data}))
    })
    
  }, [])
  
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
    state
  };
};
