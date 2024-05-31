const express = require('express');
const datefns = require("date-fns");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: datefns.format(new Date(), 'dd MMM yyyy')
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: datefns.format(new Date(), 'dd MMM yyyy')
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages  });
});

module.exports = {
  router,
  messages
};