const mongoose = require('mongoose');

 mongoose.connect("mongodb://127.0.0.1/mongocrud")

const db = mongoose.connection;
db.once("open",(err)=>{
    err ? console.log(err) : console.log("db coneccted successfully")
})

module.exports=db;