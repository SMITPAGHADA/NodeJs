const express = require("express");

const route = express.Router();
const categoryclt= require("../controller/categoryclt")
const catmulter= require("../multer/multer")

route.get("/Addcategory" , categoryclt.AddCategory)
route.post("/addCatData",catmulter,categoryclt.AddCatData)


module.exports=route