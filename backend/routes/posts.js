const express = require("express");
const router = express.Router();
const { getPosts } = require("../helpers/dataHelpers");

module.exports = ({ getPosts }) => {
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

  

  return router;
};
