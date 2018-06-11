var path = require("path");
var db = require("../models");
var cheerio = require("cheerio");
var axios = require("axios");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/dataFromScraper");
module.exports = function (app) {

 
  app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with request
    axios.get("https://old.reddit.com/r/bourbon/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
  
      // Now, we grab every h2 within an article tag, and do the following:
      $("a.title.may-blank").each(function (i, element) {
        // Save an empty result object
        var result = {};
  
        // Add the text and href of every link, and save them as properties of the result object
        result.name = $(element).text();
  
        result.title = $(element).attr("data-outbound-url");
  
        // Create a new Article using the `result` object built from scraping
        db.Site.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
      });
  
      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
  });


  app.get("/find",function(req, res){

    db.Site.find({name:/review/i}).then(function(response){
      res.json(response);
    })
  })


};