var express = require('express');
var router = express.Router();
var times=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  times=times+1;
  res.send('User accesses are :4'+times);
});

module.exports = router;
