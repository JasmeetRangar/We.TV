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

const useStyles = makeStyles(() => ({
  show: {
    // margin: "2%"
  },
}));

export default function Show(props) {
  const params = useParams();

  const { state, setState } = useApplicationData(params.id);

  // Sets state to conditionally render Chat component
  const [viewChat, setViewChat] = useState(0);

  // Sets state to conditionally render Chat component (viewChat is passed as props to the ShowNav component)
  const transitionToChat = () => {
    viewChat === 0 ? setViewChat(1) : setViewChat(0);
    console.log("✅", viewChat);
  };

  // const {viewChat, setViewChat, transitionToChat} = useViewChat();

  function onSubmit(post) {
    console.log("Line 20 PostInput.jsx", post);
    console.log(params.id);
    axios({
      method: "post",
      url: "/api/posts",
      data: {
        text: post,
        show_id: params.id,
      },
    }).then((res) => {
      console.log("postInput", res.data);

      setState((prev) => ({ ...prev, posts: [...state.posts, res.data] }));
    });
  }

  const { posts, comments, oldChat } = state;

  const classes = useStyles();
  return (
    <React.Fragment className={classes.show}>
      <Box className={classes.show}>
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
            <PostInput id={params.id} onSubmit={onSubmit} />
            <PostsList posts={posts} comments={comments} id={params.id} />
          </>
        )}
      </Box>
    </React.Fragment>
  );
}
