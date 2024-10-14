const { urlencoded } = require('body-parser');
const express =require('express');
const port =8006;


const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded());

let data =[{
    id:1,
    name:"smit",
    sub:"node",
},
{
    id:2,
    name:"smlie",
    sub:"react",
}
]

app.get("/",(req,res)=>{
    res.render("index",{data})
})
app.post("/insert",(req,res)=>{
    console.log(req.body);
    req.body.id =data.length+1;
    data.push(req.body)
    res.redirect("/")
})

app.get("/delete",(req,res)=>{
    const details= data.filter((item)=> item.id != req.query.Id)
data=details;
res.redirect("back")

})

app.get("/edit",(req,res)=>{
    let singleData= data.find((item)=> item.id == req.query.Id);
    // res.render("edit");
    singleData? res.render("edit",{singleData}):console.log(err)
    console.log(singleData);
})

app.post("/update",(req,res)=>{
    data.map((e,i)=>{
if(e.id == req.query.Id){
    e.id == req.query.Id
    e.name == req.body.name
    e.sub == req.body.sub
}else{
    e
}
    })
    res.redirect("/")
});
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start" + port)
});