const express = require('express');
const indexRouter = require("./index");
const datefns = require("date-fns");
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/', function(req, res, next) {
  const [text, user] = [req.body.text, req.body.user];
  indexRouter.messages.push({ text, user, added: datefns.format(new Date(), 'dd MMM yyyy') });
  res.redirect('./');
});

module.exports = router;
