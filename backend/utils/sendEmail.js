// nodemailer
const nodemailer = require('nodemailer');

const sendEmail  = async (options)=>{

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: process.env.SMPT_SERVICE,
        auth: {
            user: process.env.SMPT_EMAIL, // generated ethereal user
            pass: process.env.SMPT_PASSWORD, // generated ethereal password
        },
    });
    const mailOption = {
        from: process.env.SMPT_EMAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,

    }
     
    await transporter.sendMail(mailOption);

    
}
// exports
module.exports = sendEmail;