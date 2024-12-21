
const Apischema = require("../model/apicrud");
const bcrypt =require("bcryptjs")
const JsonWebToken = require("jsonwebtoken")


module.exports.allRecord= async(req,res)=>{
       let data = await Apischema.find({});
       data&&res.status(200).json({data:data})
}

module.exports.RegisterUser = async (req, res) => {
  let user = await Apischema.findOne({ email: req.body.email });
  if (user) {
    return res.status(200).json({ msg: "user already  existed" });
  }
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await Apischema.create(req.body).then((data) => {
    res.status(200).json({ msg: "user added " });
  });
};


module.exports.login =async(req,res)=>{
  let user = await Apischema.findOne({email:req.body.email});
  if(user){
    if (await bcrypt.compare(req.body.password,user.password)) {
      let token = JsonWebToken.sign({userData : user} , "rnw" ,{expiresIn : "1h"});
      token && res.status(200).json({msg: "user login succesfuly", token: token})
      console.log(token)
    } else {
      res.status(400).json({msg:"password is wrong"})
    }
  }else{
    res.status(400).json({msg:"user not found"})
  }
}

// module.exports.getRecord = async (req, res) => {
//   await Apischema.find({}).then((data) => {
//     res.status(200).json({ msg: "this is youre data" });
//   });
// };

// module.exports.addRecord = async (req, res) => {
//   console.log(req.body);

//   await Apischema.create(req.body).then((data) => {
//     res.status(200).json({ msg: "i  got youre data" });
//   });
// };

// module.exports.UpdataData = async (req, res) => {
//   await Apischema.findByIdAndUpdate(req.query.id, req.body).then((data) => {
//     res.status(200).json({ msg: "update data" });
//   });
// };

// module.exports.DeletRecord = async (req, res) => {
//   console.log(req.query.id);
//   await Apischema.findByIdAndDelete(req.query.id).then((data) => {
//     res.status(200).json({ msg: "delete your data" });
//   });
// };
