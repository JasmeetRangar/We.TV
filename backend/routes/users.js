const express = require("express");
const router = express.Router();

module.exports = ({ getUsers, getUserByEmail, getUsersPosts, getFavouriteShowsForUser, getFavouriteByShow, addFavourite }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  
  router.get("/favourite/:showId", (req, res) => {
    const {userId, showId } = req.body
    getFavouriteByShow()
      .then((favourite) => res.json(favourite))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  
  router.get("/shows", (req, res) => {

    getFavouriteShowsForUser()
      .then((shows) => res.json(shows))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          return addUser(first_name, last_name, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/favourite", (req, res) => {
    const { userId, showId } = req.body;

    addFavourite(userId, showId)
      .then((fav) => {
        res.json(fav)
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  } )

  return router;
};
