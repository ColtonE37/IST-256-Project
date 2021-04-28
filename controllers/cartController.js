/**
 * Cart controller - REST logic goes here
 */
const { response } = require("express");
const Cart = require("../models/cart");

/**
 * this method is to create the cart
 */
exports.create = (req, res) => {

    console.log("Create was called");

    /**
     * Create a cart
     */
    const cart = new Cart();

    console.log("New cart:" + cart);

    /**
     * Save cart to database
     */
    cart
        .save()
        .then((data) => {
            //res.send(data);
            console.log("Response data: " + data);
            res.status(200);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the cart.",
            });
        });
};

/**
 * Get current cart
 */
exports.getCurrentCart = (req, res) => {
    Cart.findOne({ date: new Date(Date.now()).toISOString().substring(0, 10) })
        .then((cart) => {
            console.log("Get current cart.", new Date(Date.now()).toISOString().substring(0, 10));
            if (!cart) {
                res.status(404).send({
                    message: "Cart not found for today."
                })
            } else {
                console.log("Get Current Cart called.");
                res.status(200).send(cart);
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
};

/**
 * Update Products In Cart
 */
exports.updateCartProducts = (req, res) => {
    console.log("Update Cart Request", req.body);
    const product = req.body;
    if (!product) {
        res.status(404).send({
            message: "No products to update cart."
        });
    } else {
        Cart.findOneAndUpdate({ date: new Date(Date.now()).toISOString().substring(0, 10) }, { "$push": { products: product } }, { new: true })
            .then(updatedCart => {
                console.log("Cart was successfully updated.");
                res.status(200).send(updatedCart);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Could not update cart for today's date."
                });
            });
    }
};

/** 
 * Reset Cart
*/
exports.resetCart = (req, res) => {
    const date = new Date(Date.now()).toISOString().substring(0, 10);
    console.log("Cart to reset with date: " + date);

    Cart.findOneAndDelete({ date: new Date(Date.now()).toISOString().substring(0, 10) })
        .then(deletedCart => {
            console.log("Cart was successfully reset.");
            res.status(200).send({
                message: "Cart was reset!"
            })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not reset cart for today's date."
            });
        });
};