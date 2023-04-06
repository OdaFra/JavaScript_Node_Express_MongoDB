const express = require('express');
const debug = require('debug')("app:main");

const {  Config } = require('./src/config/config');
const {ProductApi}= require('./src/products');
const {UsersApi} = require('./src/users');
const {IndexApi, NotFoundApi} = require('./src/index/index');

const app = express();

app.use(express.json());

app.listen(Config.port, () => {
    debug(`Servidor escuchando en el puerto  http://localhost:${Config.port}`)
});
IndexApi(app);
ProductApi(app);
UsersApi(app);
NotFoundApi(app);
