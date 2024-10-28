const mongoose = require("mongoose")
const { type } = require("os")

const schema = mongoose.Schema({
    name :{
        type:String ,
        required : true
    },
    title :{
        type:String ,
        required : true
    },
    image:{
        type:String,
        required:true
    }
})

const admin = mongoose.model("bookmyshow", schema);

module.exports =admin;