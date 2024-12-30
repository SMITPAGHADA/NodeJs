const express = require("express")
const port = 6000

const app=express();
app.set(app.set('view engine' ,'ejs'))
const db = require("./config/db");

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}));
app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) :console.log("server start at port" + port)
})
