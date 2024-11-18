const mongoose =require("mongoose")

schema =mongoose.Schema({

    name:
    {
        type: String ,
        required:true
    },

  
    hobby :{
        type: Array ,
        required:true
    },
    gender:{
        type: String ,
        required:true
    },
    city:{
        type: String ,
        required:true
    },
   userid :{
    type: String ,
    required:true
   }
})

const admin = mongoose.model("second", schema)

module.exports =admin