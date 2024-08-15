var express = require('express')
var router = express.Router();
var mongodb = require('mongodb')
require

router.post('/register',async function(req,res,next){
     try {
     const data = req.body.data;
     const MongoClient =  mongodb.MongoClient
     const server = await MongoClient.connect('mongodb+srv://nit:nit@cluster0.mjvo8lp.mongodb.net/')
     const db = server.db("sms")
     const collection = db.collection('students')
     const result = await collection.insertOne(data)
     res.send(result)
     }
     catch (ex) {
          res.send(ex.message)
     }
})
module.exports = router