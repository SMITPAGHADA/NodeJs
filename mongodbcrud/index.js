const express = require('express');
const port =5555;
const path = require('path');

const app = express();
app.set("view engine","ejs");
const db = require ("./config/db");
const adminCrud = require("./config/dbCrud");
app.use(express.urlencoded( { extended: true }))
app.use("/pub" , express.static(path.join(__dirname,"public",)))



app.get ("/" ,async(req,res)=>{
    let data= await adminCrud.find({})
    res.render("index",{data})
})

app.post("/insert", async(req,res)=>{
console.log(req.body)
let data = await adminCrud.create(req.body)
data&&res.redirect("/")
})

app.get("/delete", async(req,res)=>{
    let deleteRecord = await  adminCrud.findByIdAndDelete(req.query.id);
    deleteRecord&&res.redirect+("/");
})

app.get("/edit", async(req,res)=>{
    let data = await adminCrud.findById(req.query.id);
    data&& res.render("edit",{data});
})
app.post("/update", async(req,res)=>{
    // console.log(req.body);
    let data =await adminCrud.findByIdAndUpdate(req.body.id,req.body);
    data&&res.redirect("/");

})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server started" + port);
});
