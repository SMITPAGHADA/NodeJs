const express = require("express");
const path = require("path");

const port = 1080;
const cookie = require("cookie-parser")
const app = express();
const db = require("./config/db")
app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use("/", require("./routes/route"))
app.use(express.static(path.join(__dirname,"public")))
app.use("/upload",express.static(path.join(__dirname,"upload")));
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start on " + port)
})
