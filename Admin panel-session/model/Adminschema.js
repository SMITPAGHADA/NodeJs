const mongoose = require("mongoose")

const schema =  mongoose.Schema({

    fname : {
        type : String,
        require : true

    },

    email : {
        type : String,
        require : true

    },
    password : {
        type : String,
        require : true   
    },
    city:{
        type : String,
        require : true  
    },
    gender : {
        type : String,
        require : true  
    },
    hobby : {
        type : Array,
        require : true  
    },
    image : {
        type : String,
        require : true  
    }

})

const admin = mongoose.model("session", schema)

module.exports = admin
