const express = require('express');
const port = 8009;


const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded());
const db = require("./config/db");
const adminSchema = require('./config/dbSchema');


app.get('/', (req, res) => {
    res.render('index');
});

app.post("/insert", async(req, res) => {
 let data = await adminSchema.create(req.body)
 data && res.redirect("back");
  res.redirect('/');
});


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server starting..." + port);
});