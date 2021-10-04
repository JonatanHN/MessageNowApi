// EXPRESS
const express = require("express");
// MORGAN
const morgan = require("morgan");
// APP
const app = express();
// RELOAD
const reload = require("reload");
// PATH
const path = require("path");
// EJS
const ejs = require("ejs");

// routes of aplication
const allRoutes = require("./routes/routes");

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// app static files
app.use(express.static(path.join(__dirname, "public")));
// Config of ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

// Call Routes
app.use(allRoutes);

//reload
reload(app);

module.exports = app;