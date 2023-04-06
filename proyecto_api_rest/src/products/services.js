const { ObjectId } = require('mongodb');
const { Database } = require('../database/database');

const { ProductsUtils }= require('./utils');

const COLLECTION = 'products';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {

    const collection = await Database(COLLECTION);
    let result =await collection.findOne({_id:ObjectId(id)});
    return result;
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

const generateReport = async(name,res)=>{
    const products = await getAll();
    let result=  ProductsUtils.excelGenerator(products, name, res); 
    return result;
}

//TODO: FALTA UPDATE,
//TODO: FALTA DELETE

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport
}