const express = require("express");

const route = express.Router();
const indexclt= require("../controller/indexclt")
const multer = require("../multer/multer")

route.get("/",indexclt.Login)
route.get("/logout" ,indexclt.Logout)
route.post("/loginadmin",indexclt.Loginadmin)
route.get("/dashbord",indexclt.dashbord)
route.get("/AddAdmin",indexclt.AddAdmin)
route.get("/viewadmin",indexclt.ViewAdmin)
route.post("/send" ,multer,indexclt.Addadmindata)
route.get("/delete",indexclt.Addadmindelete)
route.get("/edit",indexclt.Addmineditdata)
route.post("/update",multer,indexclt.Addminupdatedata)

module.exports=route