// var axios = require('axios').default; //importing axios to make a rquest
// var express = require('express');
// var router = express.Router();

// //Refer to README.txt about issues we've encountered and our understanding of API's
// router.get('/', function (req, res, next) {
//   axios.get('https://www.heimkaup.is/api/v1/article/get-list" -H "accept: application/json').then(function (response) {
//     res.send(response.data);
//   });
// });

// module.exports = router;

// console.log("Hi");
// var settings = {
//   "url": "https://trefle.io/api/v1/plants?token=vULqZFQNueaKhoiekQr7bxFc_XO6G-0UrOC8EmI2c6U",
//   "method": "GET",
//   "timeout": 0,
// };

// $.ajax(settings).done(function (response) {
//   console.log(response);
// });
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

