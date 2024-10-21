import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://aafrith-portfolio-1999.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Preflight CORS response
  }

  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL, // Your email address to receive messages
      subject: `New contact form submission: ${subject}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      res.status(500).send(`Error sending message: ${error.message}`);
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
