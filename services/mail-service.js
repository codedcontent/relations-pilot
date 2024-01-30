const nodemailer = require("nodemailer");

const sendMail = async ({ message, subject, toEmail }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    html: message,
  };

  try {
    const sendMailInfo = await transporter.sendMail(mailOptions);

    return {
      status: true,
      data: sendMailInfo.response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

module.exports = { sendMail };
