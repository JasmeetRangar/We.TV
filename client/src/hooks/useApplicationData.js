import { useState, useEffect, } from "react";
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
  const [currUser, setCurrUser] = useState(null);

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
  const authenticateLogin = (userInfo) => {
    const {email, password} = userInfo;
    for(let user of state.users) {
      if (user.email === email && user.password === password) {
        console.log("before", currUser);
        setCurrUser(user)
        return true;
      }
    }
    return false;
  }
 

  return {
    state, 
    setState,
    authenticateLogin,
    currUser
  };
};
