/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "mozell.hagenes34@ethereal.email",
    pass: "3HpnmrUQSbFXGwZhWY",
  },
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send!");
  }
});

exports.sendEmail = onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method === "POST") {
      logger.info("Receiving data...");
      const name = req.body.firstName + req.body.lastName;
      const email = req.body.email;
      const message = req.body.message;
      const phone = req.body.phone;
      logger.info("Generating email...");
      const mailData = {
        from: name, // Sender
        to: "mozell.hagenes34@ethereal.email", // Receivers
        subject: "Portfolio Contact Form",
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
      };
      logger.info("Sending email...");
      transporter.sendMail(mailData, (err) => {
        if (err) {
          res.json({code: err.code, status: err.message});
        } else {
          res.json({code: 200, status: "Message Sent"});
        }
      });
      logger.info("Sent!");
    } else {
      logger.info("Incorrect HTML request.");
      res.json({code: 404, status: "Error, page not found."});
    }
  });
});
