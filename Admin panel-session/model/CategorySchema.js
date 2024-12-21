const mongoose = require("mongoose")

const schema =  mongoose.Schema({

    category : {
        type : String,
        require : true

    },


  
    categoryimage : {
        type : String,
        require : true  
    }

})

const admin = mongoose.model("Categorysession", schema)

module.exports = admin
