const pg = require('pg');

// Client - single connection to the rdbms
// Pool - is a managed group of clients
const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

const verb = process.argv[2];
const id = process.argv[3];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((whateverWeWant) => {
        console.log(whateverWeWant.rows);
        client.end();
      });
    break;

  case 'read':  
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((result) => {
        console.log(result.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillainName = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newVillainName, id])
      .then(() => {
        console.log('Villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const newVillain = process.argv[3];
    const newMovie = process.argv[4];
    
    const query = `
      INSERT INTO movie_villains (villain, movie)
      VALUES ($1, $2);
    `;

    const values = [newVillain, newMovie];

    client.query(query, values)
      .then(() => {
        console.log('villain originated');
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain defeated');
        client.end();
      });
    break;

  default:
    console.log('Please enter a valid verb');
    client.end();
}
