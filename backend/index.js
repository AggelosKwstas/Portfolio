var express = require("express");
const app = express();
const cors = require("cors");

// Allow requests from the frontend domain
app.use(cors({
  origin: 'https://aggelos-kostas.netlify.app',
}));

// Use the '/api' path as a base for backend routes
const apiRouter = express.Router();
app.use('/backend', apiRouter);

apiRouter.use(express.json());

require("dotenv").config();
const nodemailer = require("nodemailer");

async function mainMail(name, email, subject, message) {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });
  const mailOption = {
    from: process.env.AUTH_EMAIL,
    to: process.env.AUTH_EMAIL,
    subject: subject,
    html: `You got a message from 
    Email : ${email} <br>
    Name: ${name} <br>
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

apiRouter.get("/download", (req, res) => {
  // Adjust the file path based on your project structure
  const filePath = __dirname + "/public/assets/" + req.params.filename;
  res.download(filePath, "GAIA Platform_1.1.0_x64_en-US.msi", (err) => {
    if (err) {
      res.send({
        error: err,
        msg: "Problem downloading the file",
      });
    }
  });
});

apiRouter.post("/contact", async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  try {
    await mainMail(name, email, subject, message);
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

