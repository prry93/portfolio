// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');
// import config from './config.js';
const config = require('./config');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
});

const send = ({ email, name, text }) => {
  const sender = name && email ? `${name} <${email}>` : `${ name || email}`
  const message = {
    sender, 
    to: 'prry93@gmail.com',
    subject: `New message from ${sender} `,
    text,
    replyTo: sender
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  })
}

module.exports = send;
