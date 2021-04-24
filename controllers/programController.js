/**
 * Program controller - REST logic goes here
 */
const Program = require("../models/program");

/**
 * this method is to create the program
 */
exports.create = (req,res) => {

    console.log("Create was called");

    /**
     * validation request
     */
    if(!req.body.name || !req.body.career || !req.body.description) {
        return res.status(400).send({
            message: "Required field cannot be empty",
        });
    }

    /**
     * Create a program
     */
    const prog = new Program({
        name: req.body.name,
        career: req.body.career,
        description: req.body.description,
    });

    console.log("New program:" + prog);

    /**
     * Save program to database
     */
    prog
        .save()
        .then((data) => {
            //res.send(data);
            console.log("Response data: " + data);
            res.status(200).redirect('/program');
        })
        .catch((err) => {
            res.staus(500).send({
                message: err.message || "Some error occurred while creating the Program.",
            });
        });
};

/**
 * Find all Programs
 */
exports.findAll = (req, res) => {
    Program.find()
        .then((programs) => {
            console.log("findAll called.");
            res.status(200).send(programs);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
};

exports.delete = (req,res) => {
    const id = req.params._id;
    console.log("ID tro delete: " + id);

    Program.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot delete Program with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Program was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Program with id=" + id
            });
        });
};