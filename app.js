var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//  {
//    name: "Salmon Creek",
//    image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
//    description: "This is a huge granite hill,  no bathrooms. No water.Beautifull granite!"
//  }, function(err,campground){
//    if(err){
//    console.log(campground);
//    }
//  });

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

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
  //Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    }else{
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
  //res.render("campgrounds", {campgrounds: campgrounds});
});

//CREATE - add new campgrounds to DB
app.post("/campgrounds", function(req, res){
  //get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  //CreatCreate a new  campground and save to  DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    }else{
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req,  res){
  res.render("new.ejs");
})

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
  //find the campground with provided ID
  Campground.findById(req.params.id,  function(err, foundCampground){
    if(err){
      console.log(err);
    }else{
      res.render("show", {campground: foundCampground});
    }
  });
})

app.listen(3000, function(){
    console.log("Movie App has started on port 3000!");
});
