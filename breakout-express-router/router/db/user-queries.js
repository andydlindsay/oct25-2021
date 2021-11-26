const connection = require('./connection');

const getUsers = () => {
  return connection.query('SELECT * FROM users;')
    .then((response) => {
      return response.rows;
    });
};

const getUserById = (id) => {
  return connection.query('SELECT * FROM users WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getUsers,
  getUserById
};
