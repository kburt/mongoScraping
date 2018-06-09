var express = require("express");
var express-handlebars = require("express-handlebars");
var mongoose = ("mongoose");
var mongojs = require("mongojs");
var body-parser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");

//initialize express
var app = express();

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//database config
var databaseUrl = "scraper";
var collections = ("scrapedData");

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/all", function(req, res) {
    res.send("This is a test");
});

/*make request at homepage
request("https://www.wnyc.org/", function(error, response, html)) {
    var $ = cheerio.load(html);
    var results = [];

    $("h4.bucket-title").each(function(i, element) {
        var title = #(element).text();
        var link = $(element).parent().attr("href");

        results.push({
            title: title,
            link: link
        });
    });

    console.log(results);
}
*/

app.get("/all", function(req, res) {
    db.scrapedData.find({}, function(error, found {
        if (error) {
            console.log(error);
        }
        else {
            res.json(found);
        }
    }))
});

app.get








