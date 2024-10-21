// api/contact.js
export default function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, subject, message } = req.body;
        // Handle the request (e.g., use Nodemailer)
        res.status(200).json({ message: "Message sent successfully" });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
