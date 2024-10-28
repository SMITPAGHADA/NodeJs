const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name :{
        type: String,
        required : true,
    },
    sub :{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    hobby:{
        type:Array,
        required:true,
    },
    city : {
        type:String,
        required:true,
    },
    image : {
        type:String,
        require:true,
    }

});


let admin= mongoose.model("mvc" , schema);

module.exports =admin;