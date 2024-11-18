const express = require("express");
const port = 1090;
const path = require("path");
const db = require("./config/db")
const cookie = require("cookie-parser")

const app = express();
app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use("/",require("./routes/route"))
app.use(express.static(path.join(__dirname,"public")))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start.." + port)
})
