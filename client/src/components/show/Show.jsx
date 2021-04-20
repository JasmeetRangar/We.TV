import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowBanner from "./ShowBanner";
import PostsList from "./PostsList";
import Box from "@material-ui/core/Box";
import PostInput from "./PostInput";
import Chat from "./Chat";
import useApplicationData from "../../hooks/useApplicationData";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { authContext } from "../AuthProvider";



const useStyles = makeStyles(() => ({
  show: {
  },
}));

export default function Show(props) {
  const { user } = useContext(authContext);
  const params = useParams();

  const { state, setState } = useApplicationData(params.id, user.id);

  const addFavourite = () => {
    const userid = user.id;
    const showid = params.id;

    axios
      .post(`/api/users/${userid}/favourites/${showid}/`)
      .then((res) => {
        setState((prev) => ({ ...prev, favourites: res.data }));
      })
      .catch((e) => console.log("🪢", e));
  };

  const updateFavourite = () => {
    const userid = user.id;
    const showid = params.id;
    // is favourite does not exist, add it to DB
    if (state.favourites.length === 0) {
      addFavourite(userid, showid);
      return;
    } else {
      // if favourite exists, handle the is_active column
      let isactive = "";
      if (state.favourites.is_active) {
        isactive = "active";
      } else {
        isactive = "inactive";
      }
      axios
        .put(`/api/users/${userid}/favourites/${showid}/${isactive}`)
        .then((res) => {
          setState((prev) => ({ ...prev, favourites: res.data }));
        })
        .catch();
    }
  };

  // Sets state to conditionally render Chat component
  const [viewChat, setViewChat] = useState(1);

  // Sets state to conditiona lly render Chat component (viewChat is passed as props to the ShowNav component)
  // State is updated every time componenet is rendered
  const transitionToChat = () => {
    viewChat === 0 ? setViewChat(1) : setViewChat(0);
    axios.get(`/api/shows/${params.id}/chat`).then((res) => {
      setState((prev) => ({ ...prev, oldChat: res.data }));
    });
  };

  function uploadHandler(url) {
    setUpload(url);
  }

  const [upload, setUpload] = useState("");

  function onSubmit(post) {


    axios({
      method: "post",
      url: "/api/posts",
      data: {
        text: post,
        show_id: params.id,
        image: upload,
        creator_id: user.id,
      },
    }).then((res) => {

      axios.get(`/api/posts/${params.id}`)
      .then((response) =>{
        setUpload('');
        setState((prev) => ({ ...prev, posts: [response.data[0],...state.posts] }));
      })

      
    });
  }

  function likeHandler(post_id, index) {

    axios.put(`/api/posts/${post_id}/like`).then((res) => {

      const { posts } = state;

      posts[index].likes = res.data[0].likes;

      setState((prev) => ({...prev, posts }));
    });
  }

  function dislikeHandler(post_id, index) {

    axios.put(`/api/posts/${post_id}/dislike`).then((res) => {
      const { posts } = state;
      posts[index].dislikes = res.data[0].dislikes;
      setState((prev) => ({...prev, posts }));
    });
  }

  const { posts, comments, oldChat } = state;

  const classes = useStyles();
  return (
    <div className={classes.show}>
      <Box>
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
              upload={upload}
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
