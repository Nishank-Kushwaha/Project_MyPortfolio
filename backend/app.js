import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message)
    return res.status(400).json({ error: "All fields are required" });

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // or your verified domain
      to: "kushwahanishank01@gmail.com", // your real email
      subject: `Portfolio Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
