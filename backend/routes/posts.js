const express = require("express");
const router = express.Router();
const { getPosts, getPostsByShow, addPost } = require("../helpers/dbHelpers");

module.exports = ({ getPosts, getPostsByShow, addPost }) => {
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
