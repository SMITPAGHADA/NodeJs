const express = require('express')
const port = 1008;


const app = express();
let student =[
    {
    id:1,
    name:"John",
    age:20,
    grade:85
 },
 {
    id:2,
    name:"maken",
    age:21,
    grade:80
 },
 {
    id:3,
    name:"jonny",
    age:29,
    grade:95
 },
]

app.set('view engine', 'ejs');
app.use(express.urlencoded());  


app.get("/",(req,res)=>{
    res.render('index',{student})
})

app.post("/add",(req,res)=>{
console.log(req.body);
res.redirect('/');

})



app.listen(port,(err)=>{
    err?console.log(err) : console.log("server start" + port)
})



