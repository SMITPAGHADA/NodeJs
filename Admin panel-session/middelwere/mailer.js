const { text } = require("express")
const nodeMailer= require("nodemailer")
const mailer = nodeMailer.createTransport({
    service:"gmail",
    auth:{
        user:"smitpagada40@gmail.com",
        pass:"pirfxbrtecgyuvaa"
    }
})
module.exports.sendOtp=(to,otp)=>{
    let mailotions={
        from:"smitpagada40@gmail.com",
        to:to,
        sub:"youre password reset otp",
        text:`youre otp is ${otp}`
    };
    
    mailer.sendMail(mailotions,(err)=>{
        err? console.log(err) : console.log("mail sended successfully")
    })
}

