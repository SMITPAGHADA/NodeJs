const express = require("express");
const path = require("path");
const db = require("./config/db");
const session = require("express-session");
const passport = require("passport");
const localSt = require("./middelwere/passport")
const port = 1080;

const app = express();

app.set("view engine" , "ejs")
app.use(express.urlencoded({extended:true}))
app.use(
    session({
        name : "local",
        secret: "local",
        resave :true,
        saveUninitialized : false,
        cookie : { maxAge :100*100*60 ,httpOnly:true},
    })
)

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.AuthenticatedUser)

app.use("/", require("./routes/route"))
app.use("/category", require("./routes/catroute"))
app.use(express.static(path.join(__dirname,"public")))
app.use("/public/upload/",express.static(path.join(__dirname,"public/upload")));
app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server start on " + port)
})
