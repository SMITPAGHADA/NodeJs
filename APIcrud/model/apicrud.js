const mongoose = require("mongoose")

const schema = mongoose.Schema({

    email:{
        type:String,
        required : true,
    },

    password:{
        type: String,
        required : true,
    }
})

let admin= mongoose.model("apicrud" , schema);

module.exports =admin;