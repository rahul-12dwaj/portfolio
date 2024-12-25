import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Define the expected structure of the request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail", // Specify the email service (e.g., Gmail, SMTP server)
  auth: {
    user: process.env.EMAIL, // The sender's email address (stored in .env file)
    pass: process.env.EMAIL_PASSWORD, // The sender's email password or app password (stored in .env file)
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Ensure the request is a POST request
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method Not Allowed. Only POST requests are supported.",
      });
    }

    // Extract form data from the request body with the specific type
    const { name, email, message }: ContactFormData = req.body;

    // Validate the fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL, // The sender's email address (your own email)
      to: email, // The recipient's email address (where the contact form messages go)
      replyTo: email, // The user's email (allows easy reply from the inbox)
      subject: `New contact form submission from ${name}`,
      text: `You have received a new message from the contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success if the email is sent
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Detailed error handling
    if (error.response) {
      // SMTP server response error
      return res.status(500).json({
        message: `Email service error: ${error.response}`,
        details: error.response,
      });
    } else if (error.code === "ECONNREFUSED") {
      // SMTP connection error
      return res.status(500).json({
        message:
          "Failed to connect to the email server. Please check your SMTP configuration.",
        details: error.code,
      });
    } else {
      // Generic error
      return res.status(500).json({
        message: "An unexpected error occurred. Please try again later.",
        details: error.message,
      });
    }
  }
}
