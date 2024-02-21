const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const apiKey = "e5508a6d2f2be961c96c46dff122bb38";
  const cityName = req.body.cityName;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);

      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;

      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + desc + "<p>");
      res.write(
        "<h1>The temperature in " +
          cityName +
          " is " +
          temp +
          " degrees Celcius .</h1>"
      );
      res.write("<img src=" + imageURL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
