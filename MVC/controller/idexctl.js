let admin = require("../model/mvccrud");
const fs = require("fs");
module.exports.Homepage = async (req, res) => {
  let data = await admin.find({});
  res.render("index", { data });
};

module.exports.AddData = async (req, res) => {
  console.log(req.body);
  console.log(req.file);

  req.body.image = req.file.path;
  let data = await admin.create(req.body);    
  data && res.redirect("/");
};

module.exports.deleteData =("/delete",  async (req, res) => {
    let singledata = await admin.findById(req.query.id);
    fs.unlinkSync(singledata.image);
    let delData = await admin.findByIdAndDelete(req.query.id);
    delData && res.redirect("/");
  });

module.exports.EditData =("/edit",  async (req, res) => {
    let Edata = await admin.findById(req.query.id);
    Edata && res.render("edit", { Edata });
  });

module.exports.updateData = ("/update",async (req, res) => {
    
    
    let updata = await admin.findByIdAndUpdate(req.body.id, req.body);
    updata && res.redirect("/");
  });
