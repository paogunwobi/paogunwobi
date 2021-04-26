const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const service = 'gmail'; // ''
// const host = 'smtp.gmail.com'; // 'smtp.ethereal.email'
// const security = ''; // 'STARTTLS';
// const port = 465; // 587
// const value = 'paogunwobi@gmail.com'; // 'Floy.klein@ethereal.email';
// const code = // 'aJN8Cw4j6T3PPWCBdy';
const service = '';
const host = 'smtp.ethereal.email';
const security = 'STARTTLS';
const port = 587;
const value = 'Floy.klein@ethereal.email';
const code = 'aJN8Cw4j6T3PPWCBdy';

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
// app.use(bodyParser.json({limit: "50mb"}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.post('/api/email/sendmail', (req, res) => {
    console.log(req.body, 'data from Front-End');
    const transporter = nodemailer.createTransport({
        service: service,
        host: host,
        port: port,
        // security: security,
        auth: {
            user: value,
            pass: code
        },
    });

    var mailOptions = {
        from: 'paogunwobi@gmail.com',
        to: 'paogunwobi@gmail.com',
        cc: `${req.body.name} <${req.body.email}>`,
        subject: `${req.body.subject}`,
        html: `
            <div style="font-size:14px;">
              <div>
                <span style="padding: 10px 0">Name: </span><br>
                <span>${req.body.name}</span>
              </div>
              <br>
              <div>
                <span style="padding: 10px 0">Email Address: </span><br>
                <span>${req.body.email}</span>
              </div>
              <br>
              <div>
                <span style="padding: 10px 0">Phone Number: </span><br>
                <span>${req.body.phoneNumber}</span>
              </div>
              <br>
              <div style="padding: 10px 0">
                <p style="font-weight:500;">Message Body</p>
                <p>${req.body.message}</p>
              </div>
            </div>
          `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(400).json({
                message: 'Something Went Wrong! Try again Later'
            });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
                message: 'Message Successfuly Sent!'
            });
        }
    });

});

app.listen(3000, () => {
    console.log("server run!!!");
});
