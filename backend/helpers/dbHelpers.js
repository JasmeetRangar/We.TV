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
  };
};