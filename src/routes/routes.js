//import config of .env
require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const router = Router();

const apiKey = process.env.ApiKey;

router.get("/", (req, res, next) => {
	res.render("pages/index");
});

router.get("/sms", (req, res) => {
	const { title, message } = req.query;
	axios
		.get(
			`https://api.nowapi.dev/nowapi/v1/?title=${title}&msg=${message}%20completado&apikey=${apiKey}`
		)
		.then((response) => {
			// console.log(req.query);
			console.log(`Emisor: ${title}`);
			console.log(`Mensaje: ${message}`);
			res.render("pages/success");
		})
		.catch((error) => {
			console.log(error);
			res.render("pages/err");
		});
	
});

module.exports = router;