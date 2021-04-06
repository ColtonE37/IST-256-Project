var axios = require('axios').default; //importing axios to make a rquest
var express = require('express');
var router = express.Router();

//Refer to README.txt about issues we've encountered and our understanding of API's
router.get('/', function (req, res, next) {
  axios.get('https://www.heimkaup.is/api/v1/article/get-list" -H "accept: application/json').then(function (response) {
    res.send(response.data);
  });
});

module.exports = router;


