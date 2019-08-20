const express = require("express");
const router = express.Router();
const productController = require('../controllers/products');

router.get("/add-product", productController.getADDProduct);

router.post("/add-product", productController.postADDProduct);

exports.routes = router;

