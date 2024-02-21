const express = require('express'); 
const app = express();

app.get("/", function(req, res){
    res.send("Hello this is response for home page.")
})
app.get("/contact", function(req, res){
    res.send("Contact me at luckyverma@gmail.com")
})
app.get("/about", function(req, res){
    res.send("My name is Lucky Verma, I am MERN developer  .")
})

app.listen(3000, function () {
    console.log("sever started on port 3000!!");
})