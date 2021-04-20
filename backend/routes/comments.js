const express = require("express");
const router = express.Router();
const { getCommentsByShow, getCommentsByPost, addComment, addCommentLike, addCommentDisLike } = require("../helpers/dbHelpers");

module.exports = ({ getCommentsByShow, getCommentsByPost, addComment, addCommentLike, addCommentDisLike }) => {
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

    const {text, post_id, creator_id, image } = req.body;


    addComment(text, post_id, creator_id, image)
      .then((comment) => {
        res.json(comment)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/:comment_id/like", (req, res) => {

    const { comment_id } = req.params;


    addCommentLike(comment_id)
      .then((comment) => {
        res.json(comment)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.put("/:comment_id/dislike", (req, res) => {

    const { comment_id } = req.params;


    addCommentDisLike(comment_id)
      .then((comment) => {
        res.json(comment)
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
