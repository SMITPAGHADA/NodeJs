const express = require('express');
const admin = require('./config/dbcrud');
const port =4444;
const path = require('path');
const fs= require('fs');
const multer = require('multer');
const  storage  = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb  (null,"upload/")
    },
    filename: (req,file, cb)=>{
        cb(null,file.fieldname + "-" + Date.now())
    }
});

const app = express();  
app.use(express.urlencoded({ extended: true }));
app.use("/public",express.static(path.join(__dirname, 'public')));
app.use("/upload",express.static(path.join(__dirname, 'upload')));
        
const db = require("./config/db");
const admincrud = require("./config/dbcrud");
const upload = multer ({storage : storage}).single("image")
app.set("view engine", "ejs");


app.get("/", async(req, res) => {
    let data = await admincrud.find({})
    data&&res.render("index",{data});  
})

app.post("/insert",upload ,async(req, res) => {
req.body.image =req.file.path
  
    let data =await admincrud.create(req.body)
   data && res.redirect("/")

})
app.get("/delete",async(req, res) => {
    let singleData = await admincrud.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    let dataDelete = await admincrud.findByIdAndDelete(req.query.id);
    dataDelete&& res.redirect("/");
})

app.get("/edit", async(req, res) => {
    let data = await admincrud.findById(req.query.id)
    data&&res.render("edit",{data});
})

app.post("/update",upload,async(req, res) => {
    let img="";
    let singleData =await admincrud.findById(req.body.id)
    req.file ? img=req.file.path : img =singleData.image
    req.file && fs.unlinkSync(singleData.image);
    req.body.image =img
    let data= await admincrud.findByIdAndUpdate(req.body.id,req.body)
    data&& res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start: " + port);
})