
const createError = require('http-errors');
const debug = require('debug')('app:module-users-controllers');
const { UserServices } = require('./services');


const { Res } = require('../common/response');

module.exports.UsersController = {
    getUsers: async (req, res) => {
        try {
            let users = await UserServices.getAll();
            // res.json({
            //     message: 'Listado de productos actuales',
            //     body: products,
            // });
            Res.success(res, 200, 'Listado de usuarios', users);
        } catch (error) {
            debug(error);
            Res.error(res);
            //res.status(500).json({ message: 'Internal server error' })
        }
    },
    getUser: async (req, res) => {
        try {
            // res.json({
            //     message: `Se ha obtenido el producto del ${id}`,
            //     body: product
            // })
            const { params: { id }, } = req;
            var user = await UserServices.getById(id);
            if (!user) {
                Res.error(res, new createError.NotFound());
            } else {
                Res.success(res, 200, `Usuario con id: ${id}`, user);
            }
        } catch (error) {
            debug(error);
            //res.status(500).json({ message: 'Internal server error' })
            Res.error(res);
        }

    },
    createUser: async (req, res) => {
        try {
            const { body } = req;
            //const insertedId = await UserServices.create(body);
            // res.json({
            //     message: 'Usted ha agregado un producto',
            //     body: insertedId,
            // });
            if (!body || Object.keys(body).length === 0) {
                Res.error(res, new createError.BadRequest());
            } else {
                const insertedId = await UserServices.create(body);
                Res.success(res, 200, "Usuario agregado", insertedId);
            }
        } catch (error) {
            debug(error);
            // res.status(500).json({ message: 'Internal server error' })
            Res.error(res);

        }
    },

    //TODO: Falta UPDATE
    //TODO: Falta DELETE
};