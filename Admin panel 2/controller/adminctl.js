const schema1 = require("../model/adminschema1");
const schema2 = require("../model/adminschema2");

module.exports.SignUp = (req, res) => {
  res.render("signUp");
};
module.exports.Login = (req, res) => {
  res.render("login");
};
module.exports.checkUser = async (req, res) => {
  console.log(req.body);

  let admin = await schema1.findOne({ email: req.body.email });
  if (!admin) {
    return console.log("not found");
  }

  if (req.body.password == admin.password) {
    res.cookie("userdata", admin);
    res.redirect("/index");
  }
};
module.exports.Logout = (req, res) => {
  res.clearCookie("userdata");
  res.redirect("/login");
};
module.exports.Index = (req, res) => {
  let admin = req.cookies.userdata;
  console.log(admin);

  admin ? res.render("index") : res.redirect("/");
  // res.render("index");
};

module.exports.AddData = async (req, res) => {
 
  let data = await schema1.create(req.body);
  data && res.redirect("/index");
 
};

module.exports.Form = async (req, res) => {
  if (req.cookies.userdata) {
    let formdata = await schema2.find({});
    formdata && res.render("form");
  } else {
    res.redirect("/");
  }
};

module.exports.FormData = async (req, res) => {
  req.body.userid = req.cookies.userdata._id
  let formdata = await schema2.create(req.body);
  formdata && res.redirect("/form");
  // console.log(req.body)
};


module.exports.viewdata = async (req, res) => {
  if(req.cookies.userdata){
    let formdata = await schema2.find({});
    let SID= formdata.filter(i=>i.userid==req.cookies.userdata._id)
    SID && res.render("table", { SID });
  }else{
    res.redirect("/");
  }
 
};


module.exports.DeleteData = async (req, res) => {
  let formdata = await schema2.findByIdAndDelete(req.query.id);
  formdata && res.redirect("/viewdata");
};

module.exports.EditData = async (req, res) => {
  if(req.cookies.userdata){
    let formdata = await schema2.findById(req.query.id);
    formdata && res.render("edit", { formdata });
  }else{
res.redirect("/")
  }
};

module.exports.UpdateData = async (req, res) => {
  let formdata = await schema2.findByIdAndUpdate(req.body.id, req.body);
  formdata && res.redirect("/viewdata");
};
