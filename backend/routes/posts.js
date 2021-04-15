const express = require("express");
const router = express.Router();
const { getPosts, getPostsByShow } = require("../helpers/dbHelpers");

module.exports = ({ getPosts, getPostsByShow }) => {
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
