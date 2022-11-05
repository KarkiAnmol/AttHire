const nodeMailer =require("nodemailer"); //nodemailer is a module in nodejs for sending messages

const sendEmail = async (options) =>
{
const transporter = nodeMailer.createTransport({
    host:process.env.SMPT_HOST, //adding this host because normal gmail protocol doesnot work sometimes
    port:process.env.SMPT_PORT,
    service: process.env.SMPT_SERVICE,  //SMPT aka Simple Mail Transfer Protocol is a transport in Nodemailer for delivering messages
    auth:{
        user:process.env.SMPT_MAIL,//process.env.SMPT_MAIL so that we don't have to write sending user's mail time and again 
        pass:process.env.SMPT_PASSWORD,
    },
});

const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
};
await transporter.sendMail(mailOptions);

};
module.exports=sendEmail;