var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
     name: "Cloud's Rest",
     image: "https://farm4.staticflickr.com/3304/3202553450_128f1baf6b.jpg",
     description: "Praesent hendrerit ligula in enim consequat porta. Vivamus pellentesque turpis a lacus mollis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit quam placerat sapien consequat pharetra. Sed ornare nisl quis nunc ullamcorper pulvinar. Nulla facilisi. Vestibulum urna velit, consequat eu ornare vitae, mattis non sapien. Donec ullamcorper dictum erat ut bibendum. Aenean non metus auctor, sollicitudin diam in, venenatis sem. Aenean a dictum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pretium ligula varius convallis feugiat."
    },
    {
     name: "Desert Mesa",
     image: "https://farm2.staticflickr.com/1807/42414591884_7f984092c4.jpg",
     description: "Praesent hendrerit ligula in enim consequat porta. Vivamus pellentesque turpis a lacus mollis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit quam placerat sapien consequat pharetra. Sed ornare nisl quis nunc ullamcorper pulvinar. Nulla facilisi. Vestibulum urna velit, consequat eu ornare vitae, mattis non sapien. Donec ullamcorper dictum erat ut bibendum. Aenean non metus auctor, sollicitudin diam in, venenatis sem. Aenean a dictum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pretium ligula varius convallis feugiat."
    },
    {
     name: "Canyon Floor",
     image: "https://farm3.staticflickr.com/2651/3776039854_6ca63217cd.jpg",
     description: "Praesent hendrerit ligula in enim consequat porta. Vivamus pellentesque turpis a lacus mollis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit quam placerat sapien consequat pharetra. Sed ornare nisl quis nunc ullamcorper pulvinar. Nulla facilisi. Vestibulum urna velit, consequat eu ornare vitae, mattis non sapien. Donec ullamcorper dictum erat ut bibendum. Aenean non metus auctor, sollicitudin diam in, venenatis sem. Aenean a dictum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque pretium ligula varius convallis feugiat."
    }
]

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed campgrounds!");
    //add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err,  campground){
        if(err){
          console.log(err);
        }else{
          console.log("added a campground");
          //create a comment
          Comment.create(
            {
              text: "This place is grate, but I wish there was internet",
              author: "Homer"
          }, function(err, comment){
            if(err){
              console.log(err);
            }else{
              campground.comments.push(comment);
              campground.save();
              console.log("Createtd new comment");
            }
          });
        }
      });
    });
  });


  //add a few comments
}

module.exports = seedDB;
