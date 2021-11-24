const client = require('./connection');

const getAllVillains = (cb) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((result) => {
      // console.log(result.rows);
      // client.end();
      cb(result.rows);
    });
};

const getVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((result) => {
      // console.log(result.rows[0]);
      // client.end();
      return result.rows[0];
    });
};

module.exports = {
  getAllVillains,
  getVillainById
};
