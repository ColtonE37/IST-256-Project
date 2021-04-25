const mongoose = require("../db");
const Product = new mongoose.Schema({
    title: String,
    price: mongoose.Decimal128,
    category: String,
    description: String,
    image: String
});

module.exports = Product;