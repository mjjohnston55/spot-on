module.exports = function(app){
  const nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
          user: 'spotsanimals@gmail.com',
          pass: 'Animals1!'
      }
  });
  let mailOptions = {
      from: 'spotsanimals@gmail.com',
      to: 'Animals1!',
      subject: 'Test',
      text: 'Hello World!'
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error.message);
      }
      console.log('success');
  });
}