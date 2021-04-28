var express = require('express');
var router = express.Router();
const cartCntl = require("../controllers/cartController");

router.post('/postCart', cartCntl.create);
router.get('/currentCart', cartCntl.getCurrentCart);
router.put('/updateCartProducts', cartCntl.updateCartProducts); 
router.delete('/resetCart', cartCntl.resetCart);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;
