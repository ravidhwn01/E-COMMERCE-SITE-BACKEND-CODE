// nodemailer
const dotenv  =  require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
const nodemailer = require('nodemailer');
// const environment = require("../config/")
const sendEmail  = async (options)=>{

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: process.env.SMTP_HOST,
        // port: process.env.SMTP_PORT,
        service : process.env.SMPT_SERVICE,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_EMAIL, // generated ethereal user
            pass: process.env.SMTP_PASSWORD, // generated ethereal password
        },
    });
    //mailOptions
    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }
     
    await transporter.sendMail(mailOptions);

    
}
// exports
module.exports = sendEmail;