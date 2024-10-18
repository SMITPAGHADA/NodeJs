   const mongoose = require('mongoose')

   const schema =  new mongoose.Schema({
      name:{
         type: String,
         required: true
         
      } ,
      bookname:{
         type: String,
         required: true
      } ,
      price:{
         type: String,
         required: true
      },

      rate:{
         type: String,
         required: true
      } 

   })

   const admin =mongoose.model("crud",schema);

   module.exports = admin;