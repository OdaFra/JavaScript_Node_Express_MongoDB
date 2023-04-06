const express = require('express');
const createError = require('http-errors');

const {Res} = require('../common/response');

module.exports.IndexApi = (app)=>{
const router = express.Router();
router.get("/", (req,res)=>{
    const menu ={
        products:`https://${req.headers.host}/api/products`,
        users:`https://${req.headers.host}/api/users`,
    }
    Res.success(res, 200, 'Api inventario', menu);
});
app.use("/", router);
};

module.exports.NotFoundApi=(app)=>{
const router = express.Router();

router.all("*", (req, res)=>{
    Res.error(res, new createError.NotFound());
} ); 

app.use("/", router);
};