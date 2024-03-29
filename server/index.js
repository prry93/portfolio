const express = require('express');

const bodyParser = require('body-parser');
// const mailer = require('./mailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));


app.post('/contact', (req, res) => {
  const { email = '', name = '', message = ''} = req.body

  mailer({ email, name, text: message }).then( () => {
    alert("Message sent!");
    res.redirect('/contact');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    alert("Your message was not sent. Please try again!");
  })

});


