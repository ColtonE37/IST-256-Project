// var axios = require('axios').default; //importing axios to make a rquest
// var express = require('express');
// var router = express.Router();

// //Refer to README.txt about issues we've encountered and our understanding of API's
// router.get('/', function (req, res, next) {
//   axios.get('https://fakestoreapi.com/products').then(function (response) {
//     res.send(response.data);
//   });
// });

// module.exports = router;

var settings = {
  "url": "https://fakestoreapi.com/products",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Cookie": "__cfduid=d6790497a73979398425979e3d580f4d81618008586"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

