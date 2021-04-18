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

  const updateFavourite = () => {
    const userid = user.id
    const showid = params.id 
    let isactive = ""
    if (state.favourites.is_active) {
      isactive = "active"
    } else {
      isactive = "inactive"
    }
    axios.put(`/api/users/${userid}/favourites/${showid}/${isactive}`)
    .then((res) =>{
      setState((prev) => ({...prev, favourites: res.data}))
      console.log("👘", res.data)
    })
    .then(
      console.log("🧵", state.favourites)
    )
    .catch(e => console.log("🪢",e))
  }

  // Sets state to conditionally render Chat component
  const [viewChat, setViewChat] = useState(0);

  // Sets state to conditiona lly render Chat component (viewChat is passed as props to the ShowNav component)
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
      console.log("Favourites.is_active::::==>>", state.favourites.is_active)
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
    <div className={classes.show}>
      <Box className={classes.show}>
      {/* (state.favourites && state.favourites.length === 0) */}
        { (state.favourites && state.favourites.is_active) ?
        <h1 >Favourites + isactive</h1> :
        <h1>NoFav or Favs not active</h1>
} 
        <ShowBanner
          id={params.id}
          transitionToChat={transitionToChat}
          viewChat={viewChat}
          favourites={state.favourites}
          updateFavourite={updateFavourite}
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
    </div>
  );
}
