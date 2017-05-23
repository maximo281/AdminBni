var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home/welcome', {
    siteName: 'AdminBni'
  });
});

module.exports = router;
