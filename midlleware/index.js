const express =require('express');
const port = 8004,

app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded());

app.get('/',(req,res)=>{

    res.render("index")
})
app.post("/index",(req,res)=>{
    console.log(req.body);
    res.redirect("/")
})
app.listen(port,(err)=>{
err ? console.log(err) : console.log("server starting..." + port);
})