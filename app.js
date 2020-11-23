const express = require('express');
const bodyParser = require('body-parser');
let ejs = require('ejs');

const app = express();
const port = 3000;
var items = ["Buy Food", "Cook Food", "Eat Food"];

// Set your app view engine to ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {
  var today = new Date();
  var options = {weekday: "long", day:"numeric", month:"long", year:"numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", {kindOfDay: day, items: items});

});

app.post("/", function(req, res) {
  var newItem = req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});

// day: numeric, 2-digit
// weekday: narrow, short, long
// year: numeric, 2 digit
// month: numeric, 2-digit, narrow, short, long
// hour: numeric, 2-digit
// minute: numeric, 2-digit
// second: numeric, 2-digit
// languages: en-US, hi-IN, ia-JP
