const mongodb = require('mongodb')
async function  getDB() {
const mongoClient = mongodb.MongoClient
const server = await mongoClient.connect('mongodb+srv://nit:nit@cluster0.mjvo8lp.mongodb.net/')
const db = server.db('sms')
 return db
}

module.exports = getDB