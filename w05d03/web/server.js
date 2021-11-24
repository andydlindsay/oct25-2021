require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const { getAllVillains, getVillainById } = require('./database/queries');

const app = express();
const port = process.env.PORT || 12345;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  getAllVillains((villains) => {
    res.json(villains);
  });
});

app.get('/:id', (req, res) => {
  const id = req.params.id;
  getVillainById(id)
    .then((villain) => {
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
