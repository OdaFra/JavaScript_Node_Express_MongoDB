
const express = require('express');

const router = express.Router();

const {UsersController } = require('./controller');

module.exports.UsersApi = (app) => {
    router
        .get("/", UsersController.getUsers)  
        .get("/:id", UsersController.getUser)
        .post("/", UsersController.createUser);
        // .get("/report", UsersController.generateReporte) 

        //TODO: FALTA UPDATE 
        //TODO: FALTA DELETE

    app.use("/api/users", router);
}