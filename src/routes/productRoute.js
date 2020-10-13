const express = require('express');
const productController = require('../controllers/productController');

const route = express.Router();

route.post('/create', productController.store);
route.put('/update/:id', productController.update);
route.get('/:id', productController.get);
route.get('/', productController.index);
route.delete('/:id', productController.drop);

module.exports = route;