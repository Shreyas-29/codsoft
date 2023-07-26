const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Send email when form is submitted
app.post('/send_email', (req, res) => {
    const { name, email, message } = req.body;

    // Replace these values with your email configuration
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shreyas.sihasane@mitaoe.ac.in',
            pass: '29072004'
        }
    });

    const mailOptions = {
        from: email,
        to: 'shreyas.sihasane@mitaoe.ac.in',
        subject: `New message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Something went wrong.' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ message: 'Message sent successfully.' });
        }
    });

});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
