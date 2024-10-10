
const express= require("express")
const port =7878;

const app= express();
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.get("/",(req,res)=>{
    res.render('index')
})

app .get("/about",(req,res)=>{
 res.render('about')
})
app.post("/insert" ,(req,res)=>{
console.log(req.body)
res.redirect("/")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server run on this port" + port)
})

