import React from "react";
import PostCard from "./PostCard";

export default function PostsList(props) {
  const { posts, comments } = props;
  return posts.map((post, index) => {
    return (
      <PostCard
        comments={comments}
        post={post}
        index={index}
        likeHandler={props.likeHandler}
        dislikeHandler={props.dislikeHandler}
      />
    );
  });
}
