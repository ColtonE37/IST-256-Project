// db.js
var mongoose = require("mongoose");
//mongoose.connect("mongodb://localhost/mydb");

mongoose.connect("mongodb+srv://cje5311:Mongo@cluster0.chizq.mongodb.net/mydb?retryWrites=true&w=majority", {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the Atlas MongoDB database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

module.exports = mongoose;