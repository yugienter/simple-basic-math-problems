const express = require("express");
const router = express.Router();
const controllers = require("../controller");

const { algorithm } = controllers;
const { searchInsertPosition } = algorithm;

router.route("/search-insert-position").get(searchInsertPosition);

module.exports = router;
