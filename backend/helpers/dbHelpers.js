module.exports = (db) => {
  /*
   * GET FROM DATABASE
   */

  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPosts = () => {
    const query = {
      text: "SELECT * FROM posts",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addLike = (post_id) => {
    const query = {
      text: "UPDATE posts SET likes = likes + 1 WHERE id=$1 RETURNING *",
      values:[post_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addCommentLike = (comment_id) => {
    const query = {
      text: "UPDATE comments SET likes = likes + 1 WHERE id=$1 RETURNING *",
      values:[comment_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addCommentDisLike = (comment_id) => {
    const query = {
      text: "UPDATE comments SET dislikes = dislikes + 1 WHERE id=$1 RETURNING *",
      values:[comment_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addDisLike = (post_id) => {
    const query = {
      text: "UPDATE posts SET dislikes = dislikes + 1 WHERE id=$1 RETURNING *",
      values:[post_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getShows = () => {
    const query = {
      text: "SELECT * FROM shows",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getShow = (id) => {
    const query = {
      text: "SELECT * FROM shows WHERE id=$1",
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPostsByShow = (show_id) => {
    const query = {
      text: `SELECT posts.id, text, likes, dislikes, image, video, poll_id, creator_id, show_id, created_at, users.display_name, users.profile_pic FROM posts JOIN users ON users.id=posts.creator_id WHERE show_id=$1 ORDER BY created_at DESC`,
      values: [show_id],
    };

    




    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCommentsByShow = () => {
    const query = {
      text: `SELECT * FROM comments`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCommentsByPost = (post_id) => {
    const query = {
      text: `SELECT comments.id, text, likes, dislikes, image, video, creator_id, users.display_name, profile_pic FROM comments JOIN users ON users.id=comments.creator_id WHERE post_id=$1`,
      values: [post_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = 1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
 
  const getFavouriteByShow = (userId, showId) => {
    const query = {
      text: `SELECT * FROM favourites WHERE user_id=$1 AND show_id=$2`,
      values: [userId, showId],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getFavouriteShowsForUser = (user_id) => {
    const query = {
      text: `SELECT shows.id, shows.name, shows.description, shows.image FROM SHOWS JOIN favourites ON shows.id = favourites.show_id WHERE favourites.user_id = $1 AND is_active=true ORDER BY shows.name;`,
      values: [user_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getChatMessagesByShow = (show_id) => {
    const query = {
      text: `SELECT display_name, message, created_at, creator_id FROM chat_room_messages JOIN users ON creator_id=users.id WHERE show_id=$1 ORDER BY created_at ASC;`,
      values: [show_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  /*
   * ADD TO DATABASE
   */

  const addShow = (name, description, image, api_id) => {
    const query = {
      text: `INSERT INTO shows (name, description, image, api_id) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [name, description, image, api_id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addPost = (text, show_id, image, creator_id) => {
    const query = {
        text: `INSERT INTO posts (text, show_id, image, creator_id) VALUES ($1, $2, $3, $4) RETURNING *` ,
        values: [text, show_id, image, creator_id]
    }

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addComment = (text, post_id, creator_id,  image) => {
    const query = {
      text: `INSERT INTO comments (text, post_id, creator_id, image) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [text, post_id, creator_id, image],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addChatRoomMessage = (roomId, data) => {
    const show_id = roomId;
    const creator_id = data.senderId;
    const message = data.body;
    const query = {
      text: `INSERT INTO chat_room_messages (show_id, creator_id, message) values ($1, $2, $3) RETURNING *;`,
      values: [show_id, creator_id, message],
    };

    return db
      .query(query)
      .then((result) => console.log("🎶🎷",result.rows[0]))
      .catch((err) => console.log("😩",err));
  };

  const addUser = (firstName, lastName, email, password, display_name) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, display_name) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [firstName, lastName, email, password, display_name],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addFavourite = (userId, showId) => {
    const query = {
      text: `INSERT INTO favourites (user_id, show_id, is_active) VALUES ($1, $2, true) RETURNING *`,
      values: [userId, showId]
    };
    return db
    .query(query)
    .then((result) => result.rows[0])
    .catch((err) => err);
  }

  const removeFavourite = (userId, showId) => {
    const query = {
      text: `UPDATE favourites SET is_active=false WHERE user_id=$1 AND show_id=$2 RETURNING *`,
      values: [userId, showId]
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  }
  
  const activateFavourite = (userId, showId) => {
    const query = {
      text: `UPDATE favourites SET is_active=true WHERE user_id=$1 AND show_id=$2 RETURNING *`,
      values: [userId, showId]
    };
    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  }



  return {
    getUsers,
    getUserByEmail,
    addUser,
    getPosts,
    getCommentsByShow,
    getFavouriteShowsForUser,
    getPostsByShow,
    getCommentsByPost,
    getChatMessagesByShow,
    getFavouriteByShow,
    getShows,
    getShow,
    addShow,
    addPost,
    addComment,
    addChatRoomMessage,
    addLike,
    addDisLike,
    addCommentLike,
    addCommentDisLike,
    addFavourite,
    removeFavourite,
    activateFavourite
  };
};
  
