const express = require("express");
const cryptocurrencyController = require("../controllers/cryptocurrencyController");

const router = express.Router();

router
	.route("/")
	.get(cryptocurrencyController.getAllCryptocurrencies)
	.post(cryptocurrencyController.createCryptocurrency)

router
	.route("/:id")
	.get(cryptocurrencyController.getOneCryptocurrency)

module.exports = router;
