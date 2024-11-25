const passport = require("passport");
const passportLocalSt = require("passport-local").Strategy

const admin = require("../model/Adminschema")

passport.use("local", new passportLocalSt(
    {usernameField:"email"},
    async (email,password,done)=>{
        let adminData = await admin.findOne({email:email});
        console.log(adminData);
        
        if(adminData){
            if(adminData.password == password){
                return done(null,adminData);
            }else{
                return done(null,false)
            }
        }else{
            return done(null,false)
        }
    }
))

passport.serializeUser((user,done)=>{
    return done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    let adminData = await admin.findById(id)
    if(adminData){
        return done(null,adminData)
    }else{
        return res.redirect("/")
    }
})

passport.checkAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
        next()
    }else{
        res.redirect("/")
    }
}


module.exports = passport