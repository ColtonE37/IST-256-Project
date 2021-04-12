var axios = require('axios').default; //importing axios to make a request
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  axios({method: 'POST', url: 'https://fakestoreapi.com/products'}).then(function(response) {
    res.send(response.data)
  });
});

module.exports = router;