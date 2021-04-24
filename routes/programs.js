const express = require("express");
const router = express.Router();
const progCntl = require("../controllers/programController.js");
const Program = require("../models/program");

router.get("/", progCntl.findAll);
router.post("/", progCntl.create);
router.delete("/:_id", progCntl.delete);

module.exports = router;