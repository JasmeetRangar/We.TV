const express = require("express");
const router = express.Router();
const { getCommentsByShow, getCommentsByPost, addComment } = require("../helpers/dbHelpers");

module.exports = ({ getCommentsByShow, getCommentsByPost, addComment }) => {
  /* GET posts listing. */
  router.get("/", (req, res) => {
    getCommentsByShow()
      .then((comments) => res.json(comments))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {

    const {text, post_id } = req.body;

    console.log(req.body);

    addComment(text, post_id)
      .then((comment) => {
        res.json(comment)
        console.log(comment)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:post_id", (req, res) => {

    const id = req.params.post_id;

    getCommentsByPost(id)
      .then((comments) => res.json(comments))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  

  return router;
};
