import { useState, useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducers/dataReducer";
import axios from "axios";

export default function useApplicationData(id) {
  // const [state, dispatch] = useReducer(dataReducer, {
  //   users: [],
  //   posts: [],
  //   loading: true,
  // });
  const [state, setState] = useState({
    currUser: {},
    users: [],
    posts: [],
    comments:[]
  })

  useEffect(()=> {
    Promise.all([
      axios.get('/api/users'),
      axios.get(`/api/posts/${id}`),
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
  const authenticateLogin = (userInfo) => {
    // console.log("hook: ", userInfo);
    const {email, password} = userInfo;
    // console.log(state.users)
    for(let user of state.users) {
      if (user.email === email && user.password === password) {
        console.log("before", state.currUser);
        setState(() => ({currUser: {id: user.id}}))
        console.log("after", state.currUser);

        return true;
      }
    }
    return false;
  }
 

  return {
    state, 
    setState,
    authenticateLogin,
  };
};
