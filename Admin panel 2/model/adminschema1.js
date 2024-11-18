const mongoose =require("mongoose")

schema =mongoose.Schema({

    name:
    {
        type: String ,
        required:true
    },
    email :{
        type: String ,
        required:true
    },
    password : {
        type: String ,
        required:true
    }
  
})

const admin = mongoose.model("first", schema)

module.exports =admin