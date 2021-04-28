const mongoose = require("../db");
const Product = new mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String
});

module.exports = Product;