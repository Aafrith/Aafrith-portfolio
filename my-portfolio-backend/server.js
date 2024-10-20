// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  methods: ['GET', 'POST'],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password
    },
});

// POST route to handle contact form submissions
app.post("/api/contact", (req, res) => {
    console.log("Received request:", req.body); // log incoming request
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL, // Your email address to receive messages
        subject: `New contact form submission: ${subject}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Email sending error:", error); // Add this for detailed error logging
          return res.status(500).send(`Error sending message: ${error.message}`);
        }
        res.status(200).send("Message sent successfully!");
      });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
