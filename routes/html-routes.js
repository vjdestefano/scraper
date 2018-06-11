

var path = require("path");
var db = require("../models");


module.exports = function(app){

app.get("/", function(req, res) {
  res.send("Hello world");
});


app.get("/db", function(req, res){


  
  db.Site.find({})
    .then(function(dbSite) {

      var i = 0;

      var pageData = {}
      
      // for(i; i< dbSite.length; i++){
      // var testName = dbSite[i].name;
      // console.log(testName);
      // }
     
      
      // // If all Users are successfully found, send them back to the client
      pageData = [{
        contentName: dbSite,
        // contentTitle: testTitle,
        // contentNote: testNote
      }]

      console.log(pageData)
      // res.json(dbSite)

      res.render("index",{article:pageData});
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
})

}


