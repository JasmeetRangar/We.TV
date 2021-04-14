const express = require("express");
const router = express.Router();
const { getCommentsByShow } = require("../helpers/dbHelpers");

module.exports = ({ getCommentsByShow }) => {
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

  

  return router;
};
