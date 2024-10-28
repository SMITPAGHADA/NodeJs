const express=require("express");
const port =4001;

const app=express();
const db = require("./config/db");
const path=require("path");

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use("/",require("./router/route"))
app.use("/upload",express.static(path.join(__dirname,"upload")));



app.listen(port,(err)=>{
    err?console.log(err) : console.log("server listening on port"+ port);
})