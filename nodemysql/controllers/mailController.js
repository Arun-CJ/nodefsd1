const nodemailer = require("nodemailer");
const { GMAIL_PASSWORD, GMAIL_USERNAME } = require("../config/config");

module.exports = {
  sendMailController: async (req, res) => {
    console.log("inside mail controller");
    const data = req.body;
    let testAccount = await nodemailer.createTestAccount();

    // transporter details
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.com",
    //   port: 587,
    //   secure: false, // if port 465 we have to pass true
    //   auth: {
    //     user: testAccount.user,
    //     pass: testAccount.pass,
    //   },
    // });
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_USERNAME,
        pass: GMAIL_PASSWORD,
      },
    });

    let html = `<html>
    <body>
    <h2>Hi ${data?.name}</h2>
    <p>Thank you for purchasing the product</p>
    <p>Regards,</p>
    <p>Product Services</p>
    </body>
    </html>`;

    //mail details
    let message = {
      from: "arun.kijag@gmail.com", //sender address
      to: data?.email,
      subject: "Product Purchase Info",
      html: html,
    };

    transporter
      .sendMail(message)
      .then((info) => {
        console.log(info);
        return res.send({ message: "Successfully sent the mail" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send({ message: "Failed to send mail" });
      });
  },
};
