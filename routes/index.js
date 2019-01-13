var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login_nav', { });
});

router.get('/login', function(req, res, next) {
    res.render('login/login', { });
});

/* GET home page. */
router.get('/password', function(req, res, next) {
    res.render('login/password', { });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('login/register', { });
});
/* GET home page. */
router.get('/register-profile', function(req, res, next) {
    res.render('login/register_profile', { });
});

module.exports = router;
