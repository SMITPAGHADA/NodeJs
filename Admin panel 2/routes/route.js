const express = require("express")
const route = express.Router();
const adminctl = require("../controller/adminctl")

route.get("/", adminctl.SignUp )
route.post("/send" , adminctl.AddData)
route.get("/login",adminctl.Login)
route.post("/checkUser",adminctl.checkUser)
route.get("/logout" , adminctl.Logout)
route.get("/index",adminctl.Index)
route.get("/form",adminctl.Form)
route.post("/add",adminctl.FormData)
route.get("/viewdata" ,adminctl.viewdata)
route.get("/delete", adminctl.DeleteData)
route.get("/edit",adminctl.EditData)
route.post("/update", adminctl.UpdateData)

module.exports=route