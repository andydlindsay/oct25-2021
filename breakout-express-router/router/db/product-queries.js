const connection = require('./connection');

const getProducts = () => {
  return connection.query('SELECT * FROM products;')
    .then((response) => {
      return response.rows;
    });
};

const getProductById = (id) => {
  return connection.query('SELECT * FROM products WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = {
  getProducts,
  getProductById
};
