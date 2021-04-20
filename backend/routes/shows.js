const express = require("express");
const router = express.Router();
const { getShows, getShow, addShow, getChatMessagesByShow } = require("../helpers/dbHelpers");

module.exports = ({ getShows, getShow, addShow, getChatMessagesByShow }) => {
  /* GET posts listing. */
  router.get("/", (req, res) => {
    getShows()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:id", (req, res) => {

    const id = req.params.id;

    getShow(id)
      .then((shows) => res.json(shows))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {

    const {name, description, image, api_id } = req.body;


    addShow(name, description, image, api_id)
      .then((shows) => {
        res.json(shows)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:id/chat", (req, res) => {

    const id = req.params.id;

    getChatMessagesByShow(id)
      .then((shows) => res.json(shows))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  

  return router;
};
