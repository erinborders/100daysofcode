var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog')
  // sends 302 'found' status code by default
});

module.exports = router;
