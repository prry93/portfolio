const express = require('express');
// const router = express.Router();
const bodyParser = require('body-parser');
const send = require('./server/mailer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));


app.post('/contact', (req, res) => {
  const { email = '', name = '', message = ''} = req.body

  send({ email, name, text: message }).then( () => {
    // alert("Message sent!");
    res.redirect('/contact');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})

