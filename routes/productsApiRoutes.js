const express = require("express");

// Rutas de productos
const productsApiController = require("../controllers/productsApiController");
const productsApiRouter = express.Router();

// Products:
productsApiRouter.get('/', productsApiController.getProducts);
productsApiRouter.post('/' , productsApiController.createProduct);


module.exports = productsApiRouter;

