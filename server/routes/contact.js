import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";
import { validateContact } from "../middleware/validate.js";

const router = express.Router();

router.post("/", validateContact, async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // 2. Send Email Notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"\${name}" <\${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: \${subject}`,
      text: `Name: \${name}\nEmail: \${email}\nSubject: \${subject}\n\nMessage:\n\${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email sending error:", error);
        // We still return success if it saved to DB, or we can choose to return 500
        // It's safer to just log the error and continue if DB works
      }
    });

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Server Error. Please try again later." });
  }
});

export default router;
