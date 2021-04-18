const express = require("express");
const router = express.Router();

module.exports = ({
  getUsers,
  getUserByEmail,
  getUsersPosts,
  getFavouriteShowsForUser,
  getFavouriteByShow,
  addFavourite,
  removeFavourite,
  activateFavourite
 }) => {
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
  
  router.get("/:userid/favourites/:showid", (req, res) => {
    const {userid, showid } = req.params
    console.log('UserId:', req.params.userid)
    console.log('showId:', req.params.showid)
    getFavouriteByShow(userid,showid)
    .then((shows) => res.json(shows))
    .catch((err) =>
      res.json({
        error: err.message,
      })
    );
  });

  router.put("/:userid/favourites/:showid/:isactive", (req, res) => {
    const {userid, showid, isactive } = req.params
    console.log("🧶",isactive )
    if (isactive === "active") {
    removeFavourite(userid, showid)
    .then((removed) => res.json(removed)
    )
    .catch((err) =>
      res.json({
        error: err.message,
      })
    );
    } else {
      activateFavourite(userid, showid)
      .then((activated) => res.json(activated)
    )
    .catch((err) =>
      res.json({
        error: err.message,
      })
    );
    }
  })
  
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
