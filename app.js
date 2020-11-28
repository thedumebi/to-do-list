const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
let ejs = require('ejs');


const app = express();
const port = 3000;
let items = [];
let workItems = [];

// Set your app view engine to ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res) {
  let day = date.getDate();
  res.render("list.ejs", {listTitle: day, items: items});

});

app.post("/", function(req, res) {
  let newItem = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }


});

app.get("/work", function(req, res) {
  res.render("list.ejs", {listTitle:"Work List", items:workItems});
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
