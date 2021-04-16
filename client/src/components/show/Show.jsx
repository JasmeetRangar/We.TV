import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ShowBanner from "./ShowBanner";
import PostsList from "./PostsList";
import Box from "@material-ui/core/Box"
import PostInput from "./PostInput";
import useApplicationData from '../../hooks/useApplicationData';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

const testShow = {
  id: 1,
  name: "Watchmen",
  description: "Who watches the watchmen? Who watches the watchmen?Who watches the watchmen?Who watches the watchmen?Who watches the watchmen?",
  // image_url: "https://cdn.collider.com/wp-content/uploads/2019/12/watchmen-poster.jpg" 
  image_url: "https://uploads5.wikiart.org/images/edgar-degas/ballet-class-the-dance-hall-1880.jpg"
}

const useStyles = makeStyles(() => ({
  show: {
    // margin: "2%"
  },
}));

export default function Show(props) {

  
  const params = useParams();

  const {
    state, setState
  } = useApplicationData(params.id);


  function onSubmit(post) {
    console.log('Line 20 PostInput.jsx', post);
    console.log(params.id)
    axios({
      method: 'post',
      url: '/api/posts',
      data: {
        text: post,
        show_id: params.id
    }})
    .then((res) => {

      console.log('postInput',res.data);
      

      setState((prev) => ({...prev, posts:[...state.posts, res.data]}))
    })
  }

  function likeHandler(post_id) {
    axios({
      method: 'put',
      url: `/api/posts/${post_id}/like`,
      data: {
        post_id: post_id
    }
      })
    .then((res) => {

      console.log('addedALike',res.data);
      
      setState((prev) => ({...prev, posts:[...state.posts, res.data]}))
    })
  }

  // function onSubmitComment(comment, post_id) {
  //   console.log('Line 55 Show.jsx', comment);
  //   //console.log(params.id)
  //   axios({
  //     method: 'post',
  //     url: '/api/comments',
  //     data: {
  //       text: comment,
  //       post_id: post_id
  //   }})
  //   .then((res) => {

  //     console.log('postInput',res.data);

  //     setState((prev) => ({...prev, comments:[...state.comments, res.data]}))
      
  //   })
  // }


  

  console.log(params);

  

  const {posts, comments} = state;

  const classes = useStyles();
  return (
    <React.Fragment className={classes.show}>
      <Box className={classes.show}>
      <ShowBanner 
        id={params.id}
        />
      <PostInput id={params.id} onSubmit={onSubmit} />
      <PostsList 
        posts={posts}
        comments={comments}
        id={params.id}
        likeHandler={likeHandler}
      />
        </Box>
    </React.Fragment>
  );
}
