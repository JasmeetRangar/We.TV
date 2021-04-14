const express = require("express");
const router = express.Router();
const { getCommentsByShow, getCommentsByPost } = require("../helpers/dbHelpers");

module.exports = ({ getCommentsByShow, getCommentsByPost }) => {
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
