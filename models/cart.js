const mongoose = require("../db");
const Product = require("./product");
const Cart = new mongoose.Schema(
    {
        date: { type: String, default: new Date(Date.now()).toISOString().substring(0, 10)},
        products: [Product],
    }
);

module.exports = mongoose.model("cart", Cart);