const Contactus = require("../models/Contactus");
const nodeMailer = require("nodemailer");

const sendEmail =  (email, textArea) => {
    const transporter = nodeMailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });
      const  mailOptions =  {
        from: process.env.MY_EMAIL,
        to: email,
        subject: "contactus",
        text: textArea,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log("error in here", error.message);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
}

//contactus user
const contactUs = async (req, res) => {
  const { fullName, phone, email, textArea } = req.body;

  try {
    const contactUsUser = await Contactus.contactus(
      fullName,
      phone,
      email,
      textArea
    );

   const emailsender =  sendEmail(email, textArea);
    res.status(200).json("Great we'll be in touch");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { contactUs };
