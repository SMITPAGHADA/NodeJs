const mongoose =require('mongoose');

const schema = mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    sub : {
        type: String,
      required: true,
    }
})

const admin = mongoose.model("FriestSchema", schema);
module.exports = admin;