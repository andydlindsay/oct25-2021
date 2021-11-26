require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const dbConnection = require('./db/connection');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// import the routers
const productRouter = require('./routes/product-router');
const postRouter = require('./routes/post-router');

// use the routers as middleware
app.use('/api/admin/products', productRouter);
app.use('/posts', postRouter(dbConnection));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
