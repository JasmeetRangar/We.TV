import React from "react";
import ShowBanner from "../ShowBanner";
import PostsList from "./PostsList";

const testShow = {
  id: 1,
  name: "Watchmen",
  description: "Who watches the watchmen?",
  image_url: "https://cdn.collider.com/wp-content/uploads/2019/12/watchmen-poster.jpg"
}

export default function Show(props) {
  const {name, description, image_url} = testShow
  return (
    <React.Fragment>
      <ShowBanner 
        name={name}
        description={description}
        image_url={image_url}
        />
      <PostsList />
    </React.Fragment>
  );
}
