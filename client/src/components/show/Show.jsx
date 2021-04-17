import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowBanner from "./ShowBanner";
import PostsList from "./PostsList";
import Box from "@material-ui/core/Box";
import PostInput from "./PostInput";
import Chat from "./Chat";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from 'react';
import { authContext } from '../AuthProvider';
import useFavourites from "../../hooks/useFavourites";


const useStyles = makeStyles(() => ({
  show: {
    // margin: "2%"
  },
}));

export default function Show(props) {
  const params = useParams();
  
  const { user } = useContext(authContext);

  const { state, setState } = useApplicationData(params.id, user.id);



  // Sets state to conditionally render Chat component
  const [viewChat, setViewChat] = useState(0);

  // Sets state to conditionally render Chat component (viewChat is passed as props to the ShowNav component)
  // State is updated every time componenet is rendered
  const transitionToChat = () => {
    viewChat === 0 ?
     setViewChat(1) : 
     setViewChat(0)
     axios.get(`/api/shows/${params.id}/chat`)
     .then((res) => {
      //  console.log("🔥",res.data)
       setState((prev =>({...prev, oldChat:res.data})))
      })
      console.log("Favourites::::", state.favourites)
      ;


    console.log("✅", viewChat);
  };

  function uploadHandler(url) {
    setUpload(url);
    console.log("state set for upload");
  }


  const [upload, setUpload] = useState("");

  function onSubmit(post) {
    //console.log('Line 37 Show.jsx', post);
    console.log("this my stateeeeee for upload", upload);

    axios({
      method: "post",
      url: "/api/posts",
      data: {
        text: post,
        show_id: params.id,
        image: upload,
      },
    }).then((res) => {
      console.log("postInput", res.data);

      setUpload('');
      setState((prev) => ({ ...prev, posts: [...state.posts, res.data] }));
    });
  }

  function likeHandler(post_id, index) {
    //console.log("adding a like from show")

    axios.put(`/api/posts/${post_id}/like`).then((res) => {
      //console.log('response', res.data[0]);

      const { posts } = state;

      posts[index] = res.data[0];

      setState({ posts });

    });

  }

  function dislikeHandler(post_id, index) {
    //console.log("adding a disike from show")

    axios.put(`/api/posts/${post_id}/dislike`).then((res) => {
      //console.log('response', res.data[0]);
      const { posts } = state;
      posts[index] = res.data[0];
      setState({ posts });
    });
  }


  const { posts, comments, oldChat } = state;

  const classes = useStyles();
  return (
    <React.Fragment className={classes.show}>
      <Box className={classes.show}>
        {state.favourites.length === 0 ?
        <h1 >HI</h1> :
        <h1>Bye</h1>
} 
        <ShowBanner
          id={params.id}
          transitionToChat={transitionToChat}
          viewChat={viewChat}
        />
        {viewChat === 0 ? (
          <Chat
            roomId={params.id}
            oldChat={oldChat}
            transitionToChat={transitionToChat}
            viewChat={viewChat}
          />
        ) : (
          <>
            <PostInput
              id={params.id}
              onSubmit={onSubmit}
              uploadHandler={uploadHandler}
              posts={posts}
            />
            <PostsList
              posts={posts}
              comments={comments}
              id={params.id}
              likeHandler={likeHandler}
              dislikeHandler={dislikeHandler}
            />
          </>
        )}
      </Box>
    </React.Fragment>
  );
}
