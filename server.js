//Vincent DeStefano

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var db = require("./models");


// Initialize Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/dataFromScraper");


/* Setup express-handlebars */
app.engine("handlebars" , exphbs({ defaultLayout: "main" }));
app.set("view engine" , "handlebars");
// IMPORTING & SERVICE SETUP

// ROUTES / CONTROLLERS
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// ROUTES / CONTROLLERS


// Database configuration
// Save the URL of our database as well as the name of our collection


// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
