const ZoomAppoint = require("../models/Zoom");
const nodeMailer = require("nodemailer");
const sendEmail = (email, appointType) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "zoom",
    text: appointType,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("error in here", error.message);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

//contactus user
const zoomAppoint = async (req, res) => {
  const { date, time, firstName, lastName, email, appointType } = req.body;

  try {
    const zoomAppointment = await ZoomAppoint.zoomAppoint(
        date,
        time,
        firstName,
        lastName,
        email,
        appointType
    );
    const emailsender = await sendEmail(email, appointType);
    res.status(200).json("Great i'll se ya then");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { zoomAppoint };
