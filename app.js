var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image : "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
  {name: "Salmon Breek", image : "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
  {name: "Granite Hills", image : "https://farm4.staticflickr.com/3881/14146164489_0cb49d2904.jpg"},
  {name: "Granite Hill", image : "https://farm4.staticflickr.com/3881/14146164489_0cb49d2904.jpg"},
  {name: "Mountain Boat's Rest", image : "https://farm3.staticflickr.com/2033/1528459592_5fa348d53f.jpg"},
  {name: "Mountain Goat's Rest", image : "https://farm3.staticflickr.com/2033/1528459592_5fa348d53f.jpg"},
  {name: "Salmon Wreek", image : "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg"},
  {name: "Granite Hilde", image : "https://farm4.staticflickr.com/3881/14146164489_0cb49d2904.jpg"},
  {name: "Mountain Goat's West", image : "https://farm3.staticflickr.com/2033/1528459592_5fa348d53f.jpg"}
];


app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,  res){
  res.render("new.ejs");
})

app.listen(3000, function(){
    console.log("Movie App has started on port 3000!");
});
