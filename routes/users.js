var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req.query);
  console.log(req.body);

  let data = {
    hello:"hello",
    world:"world",
    query: req.query
  };

  res.send(data);
});

router.get('/test', function(req, res, next) {
  res.send('respond with a test resource');
});

module.exports = router;
