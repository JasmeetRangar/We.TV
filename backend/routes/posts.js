const express = require("express");
const router = express.Router();
const { getPosts, getPostsByShow, addPost, addLike } = require("../helpers/dbHelpers");

module.exports = ({ getPosts, getPostsByShow, addPost, addLike }) => {
  /* GET posts listing. */
  router.get("/", (req, res) => {
    getPosts()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {

    const {text, show_id } = req.body;

    console.log(req.body);

    addPost(text, show_id)
      .then((shows) => {
        res.json(shows)
        console.log(shows)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/api/posts/:post_id/like", (req, res) => {

    const { post_id } = req.params;

    console.log(req.params);

    addLike(post_id)
      .then((post) => {
        res.json(post)
        console.log(post)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // router put request req.params it will get post_id, addLike helper function, which will make aquery into the database update posts likes = likes + 1;
  //auto incrementing postgres function that i can use

  router.get("/:id", (req, res) => {

    const id = req.params.id;

    getPostsByShow(id)
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  

  return router;
};
