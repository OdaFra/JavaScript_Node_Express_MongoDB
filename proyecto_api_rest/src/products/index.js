
const express = require('express');

const router = express.Router();

const {ProductsController } = require('./controller');

module.exports.ProductApi = (app) => {
    router
        .get("/", ProductsController.getProducts)  //http://localhost:3000/api/products
        .get("/report", ProductsController.generateReporte) 
        .get("/:id", ProductsController.getProduct)  //http://localhost:3000/api/products/09
        .post("/", ProductsController.createProduct);

        //TODO: FALTA UPDATE 
        //TODO: FALTA DELETE

    app.use("/api/products", router);
}