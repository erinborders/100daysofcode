var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "I'm the first message!",
    user: "Erin",
    added: new Date()
  },
  {
    text: "I'm the second message",
    user: "Loser",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
