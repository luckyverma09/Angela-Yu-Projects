const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var items = [];
app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { ListTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  console.log("task received...");
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
