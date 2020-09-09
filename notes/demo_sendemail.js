// sending email with nodemailer
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com', // for multiple receivers, add them to this string
    subject: 'Sending Email using Node.js',
    text: 'That was easy!' // for html formatted text, use the html property
    // or use html files via {path: /to/file.html} or by writing out the whole html file here
    // also an attachments option which can be used for embedding images
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
