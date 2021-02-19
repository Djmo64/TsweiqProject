const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');





 const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'thereddarron@gmail.com', 
            pass: 'Mario64ZeldaLink'
        } 
    });
const sendMail = (email,token, cb) =>{
   
    
    const mailOptions = {
        from: 'thereddarron@gmail.com',
        to: email,
        subject: 'Account Activation Link',
        html: `
                <h2>Please Click on give link to activate your account.</h2>
                <a href='http://localhost:3000/#/signin'>http://localhost:3000/#/signin/${token}</a>
        `
    }
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            cb(err, null);
        }else{
            cb(null,data);
        }
    }) 
}
module.exports = sendMail;