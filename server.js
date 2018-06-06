// See near the bottom of this file for your TODO assignments.
// Good luck!

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("request");


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

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
