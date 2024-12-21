const categorySchema = require("../model/CategorySchema");

module.exports.AddCategory =(req,res)=>{
res.render("AddCategory")
}

module.exports.AddCatData=async(req,res)=>{
  
    let catData = await categorySchema.create(req.body);
console.log(req.body)
catData && res.redirect("/category/Addcategory");
}



