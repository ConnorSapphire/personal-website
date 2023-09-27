const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const router = express.Router();
const port = 80;
app.use('/v1', router);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: "***@ethereal.email",
        pass: "***"
    }
});

transporter.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send!");
    }
})

app.post('/contact', (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    
    const mailData = {
        from: name,  // Sender
        to: "mozell.hagenes34@ethereal.email",   // Receivers
        subject: 'Portfolio Contact Form',
        html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>`,
    };

    transporter.sendMail(mailData, function (err, info) {
        if(err)
        res.json({code: err.code, status: err.message});
        else
        res.json({code: 200, status: "Message Sent"});
    });
});