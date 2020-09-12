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
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('messageForm')
})

router.post('/new', function(req, res, next) {
  messages.push({ text: messageText, user: messageUser, added: new Date()})
  res.redirect('/')
})

module.exports = router;
