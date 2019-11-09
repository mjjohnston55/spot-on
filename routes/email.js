var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'spotsanimal@gmail.com',
    pass: 'Animals1!'
  }
});

var mailOptions = {
  from: 'spotsanimal@gmail.com',
  to: 'spotsanimal@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Test'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
