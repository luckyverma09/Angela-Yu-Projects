const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { stringify } = require("querystring");
// const apiKey = "19c38b4a2f3da92fd4aad9596a611b0f-us21";
// const audId = "f977f93c7f";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fname;
  const lastName = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us21.api.mailchimp.com/3.0/lists/f977f93c7f";

  const options = {
    method: "POST",
    auth: "Lucky:19c38b4a2f3da92fd4aad9596a611b0f-us21",
  };

  const request = https.request(url, options, function (response) {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is running on port : 3000.");
});
