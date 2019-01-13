var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { });
});

/* GET home page. */
router.get('/password', function(req, res, next) {
    res.render('password', { });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('register', { });
});

module.exports = router;
