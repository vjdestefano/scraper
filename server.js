// See near the bottom of this file for your TODO assignments.
// Good luck!

// Dependencies
var express = require("express");
var handlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cheerio = require("request");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "dataFromScraper";
var collections = ["scraped"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Root: Displays a simple "Hello World" message (no mongo required)
app.get("/", function(req, res) {
  res.send("Hello world");
});




// Set the app to listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
