const express = require("express");
const router = express.Router();
const { getPosts, getPostsByShow, addPost, addLike, addDislike } = require("../helpers/dbHelpers");

module.exports = ({ getPosts, getPostsByShow, addPost, addLike, addDisLike }) => {
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

    const {text, show_id, image, creator_id } = req.body;


    addPost(text, show_id, image, creator_id)
      .then((shows) => {
        res.json(shows)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/:post_id/like", (req, res) => {

    const { post_id } = req.params;


    addLike(post_id)
      .then((post) => {
        res.json(post)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/:post_id/dislike", (req, res) => {

    const { post_id } = req.params;


    addDisLike(post_id)
      .then((post) => {
        res.json(post)
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
