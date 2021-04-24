const mongoose = require("../db");
const schema = new mongoose.Schema(
    {
        name: {
            desc: "The program name.",
            trim: true,
            type: String,
            index: true,
            unique: true,
            required: true,
        },
        career: {
            desc: "The program career e.g. undergraduate, graduate, etc.",
            trim: true,
            type: String,
            required: true,
        },
        description: {
            desc: "The program description",
            trim: true,
            type: String,
            required: true,
        }
    }
);

module.exports = mongoose.model("program", schema);