const { ObjectId } = require('mongodb');
const { Database } = require('../database/database');


const COLLECTION = 'users';

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


//TODO: FALTA UPDATE,
//TODO: FALTA DELETE

module.exports.UserServices = {
    getAll,
    getById,
    create,
    
}