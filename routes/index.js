var express = require('express');
var router = express.Router();
const cartCntl = require("../controllers/cartController");

router.post('/postCart', cartCntl.create);
router.get('/currentCart', cartCntl.getCurrentCart);

//Ask about why this doesn't work when in mens_clothing.js
router.put('/updateCartProducts', cartCntl.updateCartProducts); 

router.get('/getCartProducts', cartCntl.getCartProducts);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;
