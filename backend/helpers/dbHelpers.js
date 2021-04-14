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

  const getPosts = (db) => {
    const query = {
      text: "SELECT * FROM posts",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getCommentsByShow = (show_id) => {
    const query = {
      // text: `SELECT comments.creator_id, comments.post_id, comments.created_at, comments.likes, comments.dislikes, comments.image, comments.video, comments.text FROM comments JOIN posts ON posts.id = comments.post_id WHERE posts.show_
      // id=1 GROUP BY comments.id`,
      // values: [show_id]  
      text: `SELECT * from comments`
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = $1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
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
      getCommentsByShow
  };
};