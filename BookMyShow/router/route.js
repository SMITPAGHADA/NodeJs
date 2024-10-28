const express = require("express")
    const route = express.Router();
    const bookclt = require("../controller/bookclt");
    const multer = require("../multer/multer")

route.get("/", bookclt.Homepage)
route.get("/Addpage",bookclt.Addpage)
route.post("/insert",multer, bookclt.AddData)
route.get("/delete" ,bookclt.DeleteData)
route.get("/edit",bookclt.EditData)
route.post("/update",multer,bookclt.Updata)

    module.exports =route;