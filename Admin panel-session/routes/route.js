const express = require("express");

const route = express.Router();
const indexclt= require("../controller/indexclt")
const multer = require("../multer/multer");
const passport = require("passport");

route.get("/",indexclt.Login)
route.get("/logout" ,indexclt.Logout)
route.post("/loginadmin",passport.authenticate("local",{failureRedirect:"/"}),indexclt.Loginadmin)
route.get("/dashbord",passport.checkAuthentication,indexclt.dashbord)
route.get("/AddAdmin",passport.checkAuthentication,indexclt.AddAdmin)
route.get("/viewadmin",passport.checkAuthentication,indexclt.ViewAdmin)
route.post("/send" ,multer,indexclt.Addadmindata)
route.get("/delete",indexclt.Addadmindelete)
route.get("/edit",passport.checkAuthentication,indexclt.Addmineditdata)
route.post("/update",multer,indexclt.Addminupdatedata)
route.get("/profile" ,indexclt.Profilepage)
route.get("/changpass",indexclt.Checkpass)
route.post("/confirmpass",indexclt.Confirmpass)
route.get("/sendDATA",indexclt.sendotp)
route.post("/info",indexclt.sendotpData)
route.post("/checkpass" , indexclt.checkData)

module.exports=route