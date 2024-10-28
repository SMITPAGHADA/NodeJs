const express =require('express');
const port = 4000;
const app=  express();
const path =require('path');
const fs = require('fs');
const multer =require("multer")

app.set("view engine" ,"ejs");
app.use(express.urlencoded({ extended: true }));
const db=require("./config/db");
const practicecrud = require("./config/ptcrud");
app.use("/upload",express.static(path.join(__dirname, 'upload')));




const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
           cb(null,"upload/")
    },
    filename : (req,file,cb)=>{
            cb(null,file.fieldname +"-" + Date.now())
    }
})

const upload = multer ({storage:storage}).single("image")

app.get("/", async(req, res) => {

    let data = await practicecrud .find({})
   data&& res.render("index" ,{data})
})
app.post("/insert",upload,async(req,res)=>{
  
    req.body.image=req.file.path
  
    let data = await practicecrud.create(req.body);
    console.log(req.body)
    data &&res.redirect("/");
})

app.get("/delete", async(req, res) => {
    let data = await practicecrud.findByIdAndDelete(req.query.id)
    data &&res.redirect("/");
})
app.get("/edit",async(req,res)=>{
    let Editdata=await practicecrud.findById(req.query.id)
    Editdata&&res.render("edit",{Editdata})
})

app.post("/update",async(req,res)=>{
    let updateData= await practicecrud.findByIdAndUpdate(req.body.id,req.body)
    updateData &&res.redirect("/");
})

app.listen(port, (err)=>{
    err ? console.log(err) : console.log("listening on port" + port);
});
