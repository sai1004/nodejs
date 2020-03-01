"use strict";
const nodemailer = require("nodemailer");
var fs = require("fs");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "saikiran.bavandla@eeee.com",
      pass: "erkhkrt123312"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "saikiran@eeee.com",
    to: "saikiran@gmail.com",

    subject: "Booking confirmation",
    text: `hello sai your booking is confirmed have a nice time! `,
    html:
      "<b> this mail is regarding confirmation room booking donot replay to this email </b>", // you can render html file here,
    attachments: [
      {
        filename: "./templates/demo.pdf",
        contentType: "application/pdf"
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
