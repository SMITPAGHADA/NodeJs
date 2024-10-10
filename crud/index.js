const express = require("express");
const port = 8002;

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded());

let data = [
  {
    id:1,
    name: "John Doe",
    city: "Rajkot",
  },

  {
    id:2,
    name: "smith",
    city: "Rajkot",
  },

  {
    id:3,
    name: "den",
    city: "Rajkot",
  },
];
app.get("/", (req, res) => {
  res.render("index",{data});
});

app.post("/insert", (req, res) => {
  // console.log(req.body);
  req.body.id= data.length+1;
  data.push(req.body);
  res.redirect("/");
});

app.get("/delete", (req, res) => {
  let details =data.filter((item)=> item.id != req.query.Id);
  data=details;
  // console.log(req.query.Id);
  res.redirect("back");
})

app.get("/edit", (req, res) => {
  let singleData= data.find((item)=> item.id == req.query.Id);
  // res.render("edit");
  singleData? res.render("edit",{singleData}):console.log(err)
  // console.log(req.query.id)
  console.log(singleData);
  
})

app.post("/update",(req,res)=>{
  data.map((e,i)=>{
if(e.id==req.query.Id){
  e.id == req.query.Id
  e.name=req.body.name
  e.city=req.body.city
}else{
  e
}
  })
  res.redirect("/")
})

app.post("/")
app.listen(port, (err) => {
  err ? console.log(err) : console.log("SERVSER START  " + port);
});
