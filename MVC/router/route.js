const express = require("express");
const route = express.Router();
const indexctl = require("../controller/idexctl");
const multer=require("../multer/multer")

route.get("/", indexctl.Homepage)
route.post("/insert" , multer ,indexctl.AddData)
route.get("/delete", indexctl.deleteData)
route.get("/edit" , indexctl.EditData)
route.post("/update",multer,indexctl.updateData)

module.exports=route;