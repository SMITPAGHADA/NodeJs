const express = require("express")
const port = 1008

const app=express();
const db = require("./config/db");


app.use(express.urlencoded({extended:true}));
app.use("/",require("./route/route"))

app.listen(port,(err)=>{
    err ? console.log(err) :console.log("server start at port" + port)
})

