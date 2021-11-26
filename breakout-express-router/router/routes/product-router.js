const express = require('express');
const router = express.Router();
const productFns = require('../db/product-queries');

// GET /products/
router.get('/', (req, res) => {
  productFns.getProducts()
    .then((products) => {
      res.json(products);
    });
});

// GET /products/:id
router.get('/:id', (req, res) => {
  productFns.getProductById(req.params.id)
    .then((product) => {
      res.json(product);
    });
});

module.exports = router;
