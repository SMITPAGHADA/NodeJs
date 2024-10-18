const express = require('express');
const admin = require('./config/dbcrud');
const port =4444;
const path = require('path');

const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use("/public",express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
const db = require("./config/db");
const admincrud = require("./config/dbcrud");



app.get("/", async(req, res) => {
    let data = await admincrud.find({})
    data&&res.render("index",{data});  
})

app.post("/insert" ,async(req, res) => {

  
    let data =await admincrud.create(req.body)
   data && res.redirect("/")

})
app.get("/delete",async(req, res) => {
    let dataDelete = await admincrud.findByIdAndDelete(req.query.id);
    dataDelete&& res.redirect("/");
})

app.get("/edit", async(req, res) => {
    let data = await admincrud.findById(req.query.id)
    data&&res.render("edit",{data});
})

app.post("/update",async(req, res) => {
    let data= await admincrud.findByIdAndUpdate(req.body.id,req.body)
    data&& res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start: " + port);
})