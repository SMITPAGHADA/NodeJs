const express = require("express")
const port = 8001;



const app =express();

let data =[
  {
    id:1,
    name: "smit",
    sub:"node",
    city:"rajkot"
  },
  {
    id:2,
    name: "divali",
    sub:"js",
    city:"diu"
  },
  {
    id:3,
    name: "anand",
    sub:"react",
    city:"made in bhanvad"
  }
]
app.set("view engine", "ejs")
app.use(express.urlencoded());

app.get("/",(req,res)=>{
  res.render("crud",{data})
})

app.post("/insert",(req,res)=>{
    // console.log(req.body);
    req.body.id =data.length +1;
    data.push(req.body);
    res.redirect("/");
})

app.get("/delete",(req,res)=>{
  let details = data.filter((item)=>item.id != req.query.Id)
  data = details;
  res.redirect("back");
})
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start" + port);
})