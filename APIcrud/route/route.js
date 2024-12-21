const express =require("express")
const route =express.Router();
const Apictl=require("../controller/apictl")


// route.get("/", Apictl.getRecord)
// route.post("/add",Apictl.addRecord)
// route.delete("/delete",Apictl.DeletRecord)
// route.put("/update",Apictl.UpdataData)
route.post("/registration",Apictl.RegisterUser)
route.post("/login",Apictl.login)
route.post("/view",Apictl.allRecord)
    
module.exports=route;