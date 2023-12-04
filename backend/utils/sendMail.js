const nodemailer = require("nodemailer")

const sendMail=async(options)=>{
    const transporter= nodemailer.createTransport({
        // host:"smtp.gmail.com",
        service : "gmail",
        auth:{
            user:"chinmoy.dehingia@gmail.com",
            pass:"pxjrhkezuiyixdgs"
        }
    })

    const mailOptions={
        from:"chinmoy.dehingia@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    // console.log(mailOptions)
    await transporter.sendMail(mailOptions,(err)=>{
        if(err){
            console.log("Error",err)
        }
    })
}
// console.log(process.env.SMPT_HOST,process.env.SMPT_PORT,process.env.SMPT_MAIL,process.env.SMPT_PASSWORD,process.env.SMPT_MAI)
module.exports=sendMail