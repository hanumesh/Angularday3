var express = require("express");
var fs = require("fs");
var bp = require("body-parser");
var app = express();
app.use(bp());
app.use(express.static(__dirname+"/public/"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", function(req,res){
	res.send();
});
app.post("/", function(req,res){
	console.log(req.body);
	res.send("i got some data")
});

app.get("/heros", function(request, response){
	fs.readFile("data/data.json", function(error, data){
		response.send(JSON.parse(data));
	});
});
app.listen(1234, function(){
	console.log("your server is now running on port 1234");
});