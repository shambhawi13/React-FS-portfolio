const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.SOURCE_EMAIL,
    pass: process.env.EMAIL_PASS 
  }
});

function mailOptions (detailObj){
  let subject = `${detailObj.name} would like to connect`;
  let bodyOfMail = `From: ${detailObj.name}
  email id: ${detailObj.email}
  phone number: ${detailObj.phone?detailObj.phone:"No phone number provided"}
  message: ${detailObj.subject}`;
  let mailOptions = {
        from: process.env.SOURCE_EMAIL,
        to: `${process.env.MAIL_TO}`,
        subject: subject,
        text: bodyOfMail
      };
      return mailOptions;
}

function sendAckMail (detailObj){
  let subject = `Thanks for connecting ${detailObj.name}`;
  let bodyOfMail = `Your connection request has been received by Shambhawi Kumari.
  You should receive reply within 48hrs.
  
  Regards
  Shambhawi
  
  ** This is an auto generated mail. Do not reply to this mail id.`;
  let mailOptions = {
        from: process.env.SOURCE_EMAIL,
        to: `${detailObj.email}`,
        subject: subject,
        text: bodyOfMail
      };
      return mailOptions;
}


function sendMail(detailObj){
  console.log("inside config sendMail ",detailObj);
  if(detailObj){
    transporter.sendMail(mailOptions(detailObj), function (error, info) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    //send acknowledgement mail
    transporter.sendMail(sendAckMail(detailObj), function (error, info) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log('Acknowledgement Email sent: ' + info.response);
      }
    });
    
  }
}

module.exports = sendMail;
