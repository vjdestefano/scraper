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


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/dataFromSraper";

var port = process.env.MONGODB_URI || 3000;
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


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
app.listen(port, function() {
  console.log("App running on port 3000!");
});
