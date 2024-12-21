const { console } = require("inspector");
const adminschema = require("../model/Adminschema");
const mailer = require("../middelwere/mailer")
const fs = require("fs");
const { log } = require("console");


module.exports.Login = (req, res) => {
  res.render("login");
};

module.exports.Logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports.Loginadmin = async (req, res) => {
  console.log(req.body);

  res.redirect("/dashbord");
};

module.exports.dashbord = (req, res) => {
  res.render("dashbord");
};

module.exports.AddAdmin = (req, res) => {
  let data = adminschema.find({});
  data && res.render("Addadmin");
};
module.exports.ViewAdmin = async (req, res) => {
  let data = await adminschema.find({});
  data && res.render("viewadmin", { data });
};

module.exports.Addadmindata = async (req, res) => {
  req.body.image = req.file.path;
  let data = await adminschema.create(req.body);
  data && res.redirect("/Addadmin");
};

module.exports.Addadmindelete = async (req, res) => {
  let singleData = await adminschema.findById(req.query.id);
  fs.unlinkSync(singleData.image);
  let data = await adminschema.findByIdAndDelete(req.query.id);
  data && res.redirect("/viewadmin");
};

module.exports.Addmineditdata =
  ("/edit",
  async (req, res) => {
    let data = await adminschema.findById(req.query.id);
    data && res.render("edit", { data });
  });

module.exports.Addminupdatedata =
  ("/update",
  async (req, res) => {
    let img = "";
    let singleData = await adminschema.findById(req.body.id);
    req.file ? (img = req.file.path) : (img = singleData.image);
    req.file && fs.unlinkSync(singleData.image);
    req.body.image = img;
    let data = await adminschema.findByIdAndUpdate(req.body.id, req.body);
    data && res.redirect("/viewadmin");
  });

module.exports.Profilepage = (req, res) => {
  res.render("profile");
};
module.exports.Checkpass = (req, res) => {
  res.render("checkpass");
};
module.exports.Confirmpass = async (req, res) => {
  let user = req.user;
  console.log(user);
  
  if (req.body.oldpass == user.password) {
    if (req.body.newpassword !== user.password) {
      console.log(req.body.newpassword);
      console.log(req.body.confirmpassword);

      if (req.body.newpassword == req.body.confirmpassword) {
        let changdata = await adminschema.findByIdAndUpdate(user.id, {
          password: req.body.newpassword,
        });
        res.redirect("/logout");
      } else {
        console.log("new pass and confirm pass is not same");
      }
    } else {
      console.log("new pass same as old pass");
    }
  } else {
    console.log("old pass is wrong");
  }
};

module.exports.sendotp = (req, res) => {
  res.render("Form")
};

module.exports.sendotpData=async(req,res)=>{
  let user = await adminschema.findOne({ email: req.body.email });
  console.log(user);
  if (!user) {
    console.log("user not found");
    return res.redirect("/");
  }
  let otp = Math.floor(100000 + Math.random() * 900000);
  mailer.sendOtp(req.body.email, otp);
  console.log(user);
console.log(req.body)
  req.session.otp = otp;
  req.session.Addadmindata = user;
  res.render("changepass");
}

module.exports.checkData=async(req,res)=>{
 
   let adminId = req.session.Addadmindata._id;
   let otp = req.session.otp
log(otp)
   if(req.body.otp == otp){
     if(req.body.newpassword== req.body.confirmpassword){
     let changepassword =await adminschema.findByIdAndUpdate(adminId,{
      password : req.body.newpassword
     });
     res.redirect("/");
     }else{
      res.redirect("/");
     }
   }else{
    res.redirect("/");
   }
}