
const createError = require('http-errors');
const debug = require('debug')('app:module-products-controllers');
const { ProductsService } = require('./services');


const { Res } = require('../common/response');

module.exports.ProductsController = {
    getProducts: async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            // res.json({
            //     message: 'Listado de productos actuales',
            //     body: products,
            // });
            Res.success(res, 200, 'Listado de productos', products);
        } catch (error) {
            debug(error);
            Res.error(res);
            //res.status(500).json({ message: 'Internal server error' })
        }
    },
    getProduct: async (req, res) => {
        try {
            // res.json({
            //     message: `Se ha obtenido el producto del ${id}`,
            //     body: product
            // })
            const { params: { id }, } = req;
            var product = await ProductsService.getById(id);
            if (!product) {
                Res.error(res, new createError.NotFound());
            } else {
                Res.success(res, 200, `Producto ${id}`, product);
            }
        } catch (error) {
            debug(error);
            //res.status(500).json({ message: 'Internal server error' })
            Res.error(res);
        }

    },
    createProduct: async (req, res) => {
        try {
            const { body } = req;
            //const insertedId = await ProductsService.create(body);
            // res.json({
            //     message: 'Usted ha agregado un producto',
            //     body: insertedId,
            // });
            if (!body || Object.keys(body).length === 0) {
                Res.error(res, new createError.BadRequest());
            } else {
                const insertedId = await ProductsService.create(body);
                Res.success(res, 200, "Producto agregado", insertedId);
            }
        } catch (error) {
            debug(error);
            // res.status(500).json({ message: 'Internal server error' })
            Res.error(res);

        }
    },

    generateReporte :(req, res)=>{
        try {
            ProductsService.generateReport('Inventario', res);
        } catch (error) {
            debug(error);
            Res.error(res);
        }
    },
    //TODO: Falta UPDATE
    //TODO: Falta DELETE
};