module.exports = (db) => {
  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
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
      values:[id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPostsByShow = (show_id) => {
    const query = {
      text: `SELECT * FROM posts WHERE show_id=$1`,
      values: [show_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCommentsByShow = () => {
    const query = {
      text: `SELECT * FROM comments`
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCommentsByPost = (post_id) => {
    const query = {
      text: `SELECT * FROM comments WHERE post_id=$1`,
      values:[post_id]
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = 1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }
  
  const getFavouriteShowsForUser = () => {

      const query = {
        text: `SELECT shows.id, shows.name, shows.description, shows.image FROM SHOWS JOIN favourites ON shows.id = favourites.show_id WHERE favourites.user_id = 1;` 
          // values: [user_id]
      }

      return db
          .query(query)
          .then(result => result.rows)
          .catch((err) => err);
  }

  const addShow = (name, description, image, api_id) => {
    const query = {
        text: `INSERT INTO shows (name, description, image, api_id) VALUES ($1, $2, $3, $4) RETURNING *` ,
        values: [name, description, image, api_id]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }

  const addPost = (text, show_id) => {
    const query = {
        text: `INSERT INTO posts (text, show_id) VALUES ($1, $2) RETURNING *` ,
        values: [text, show_id]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }

  const addComment = (text, post_id) => {
    const query = {
        text: `INSERT INTO comments (text, post_id) VALUES ($1, $2) RETURNING *` ,
        values: [text, post_id]
    }

    return db.query(query)
        .then(result => result.rows[0])
        .catch(err => err);
  }


  


  const addUser = (firstName, lastName, email, password, display_name) => {
      const query = {
          text: `INSERT INTO users (first_name, last_name, email, password, display_name) VALUES ($1, $2, $3, $4, $5) RETURNING *` ,
          values: [firstName, lastName, email, password, display_name]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
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
      getShows,
      getShow,
      addShow,
      addPost,
      addComment,
      addLike,
      addDisLike,
      addCommentLike,
      addCommentDisLike
  };
};