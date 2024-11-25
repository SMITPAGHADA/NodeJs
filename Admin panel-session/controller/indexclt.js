const adminschema = require("../model/Adminschema")
const fs = require("fs")


module.exports.Login=(req,res)=>{
res.render("login")
}

module.exports.Logout=(req,res)=>{
    req.session.destroy();
res.redirect("/")
}

module.exports.Loginadmin= async(req,res)=>{
    console.log(req.body);
    
    res.redirect("/dashbord")
    }

module.exports.dashbord=(req,res)=>{
   
     res.render("dashbord") 
}

module.exports.AddAdmin=(req,res)=>{
    let data = adminschema.find({})
    data &&  res.render("Addadmin")
}
module.exports.ViewAdmin=async(req,res)=>{
    let data =  await adminschema.find({})
    data && res.render("viewadmin",{data})
}

module.exports.Addadmindata= async(req,res)=>{
 req.body.image = req.file.path;
 let data =await adminschema.create(req.body)
 data && res.redirect("/Addadmin")
}

module.exports.Addadmindelete =async(req,res)=>{
    let singleData = await adminschema.findById(req.query.id)
    fs.unlinkSync(singleData.image)
    let data = await adminschema.findByIdAndDelete(req.query.id)
    data&& res.redirect("/viewadmin")
}

module.exports.Addmineditdata =("/edit",  async (req, res) => {
    let data = await adminschema.findById(req.query.id);
    data && res.render("edit", { data });
  });


  module.exports.Addminupdatedata =("/update",  async (req, res) => {
    let img="";
    let singleData =await adminschema.findById(req.body.id)
    req.file ? img=req.file.path : img =singleData.image
    req.file && fs.unlinkSync(singleData.image);
    req.body.image =img
    let data = await adminschema.findByIdAndUpdate(req.body.id,req.body);
    data && res.redirect("/viewadmin");
  });