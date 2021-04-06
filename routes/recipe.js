var axios = require('axios').default; //importing axios to make a rquest
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  axios.get('http://www.recipepuppy.com/api/?i=beef&q=sandwich&p=3').then(function(response){
      res.send(response.data);
  });
});

module.exports = router;
