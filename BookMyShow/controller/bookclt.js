const bookschema =require("../model/bookschema")
const fs = require("fs")

module.exports.Homepage = async(req,res)=>{
   let data =await bookschema.find({})
      res.render("home",{data})
}

module.exports.Addpage =async(req,res)=>{
   
    let data =await bookschema.find({})
    res.render("Addpage",{data})
   
}

module.exports.AddData= async(req,res)=>{
    req.body.image = req.file.path;
 let data =await bookschema.create(req.body)
 data && res.redirect("/")
 console.log(req.body)
 console.log(req.file)
}

module.exports.DeleteData = async(req,res)=>{
    let singledata = await bookschema.findById(req.query.id);
    fs.unlinkSync(singledata.image);
    let data = await bookschema.findByIdAndDelete(req.query.id)
    data && res.redirect("/")
}
module.exports.EditData =async(req,res)=>{
    let data =await bookschema.findById(req.query.id)
    data && res.render("edit",{data})
}
module.exports.Updata = async(req,res)=>{
    let img="";
    let updata= await bookschema.findById(req.body.id)
    req.file ? img=req.file.path : img= updata.image
    req.file && fs.unlinkSync(updata.image);
    req.body.image=img
    let data = await bookschema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/")
}