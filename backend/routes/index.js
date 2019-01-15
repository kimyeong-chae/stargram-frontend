var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send();
});

router.get('/login', (req, res, next) => {
  res.send();
});

module.exports = router;
