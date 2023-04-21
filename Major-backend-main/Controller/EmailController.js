const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    const data = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "lavleshsingh1520@gmail.com",
        pass: "iobumzbjeoxsbiip",
      },
    });

    const email_config = {
      from: "lavleshsingh1520@gmail.com",
      to: `${data.email}`,
      subject: `Crowdfunding Team : Reply to your Query ~ ${data.subject} `,
      text: `Hey ${data.name} , 
       
        ${data.reply}



regards,
Crowdfunding Team
        `,
    };

    transporter
      .sendMail(email_config)
      .then((info) => {
        res.status(200).json({
          success: true,
          message: "email sent",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
