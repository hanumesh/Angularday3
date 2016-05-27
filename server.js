var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
    app.use(express.static(__dirname));
    app.use(bodyParser.json());

app.get("/", function(request, response){
	response.send();
});
app.get("/heros", function(request, response){
	fs.readFile("data/heroes.json", function(error, data){
		response.json(JSON.parse(data));
	})
});
app.post("/heros", function(request, response){
	var heros = null;
	fs.readFile("data/heroes.json", function(error, data){
		heros = JSON.parse(data);
		heros.push(request.body);
		fs.writeFile("data/heroes.json",JSON.stringify(heros), function(){
			console.log("file updated")
		});
		response.json(heros); 
	})
}); 
app.put("/movies/:id", function(request, response){
	var id = request.params.id;
	var heros = null;
	fs.readFile("data/heroes.json", function(error, data){
		heros = JSON.parse(data);
		for(var i = 0; i < heros.length; i++){
			if(heros[i].id == id){
				heros[i].movieslist.push(request.body);
			}
		}
		fs.writeFile("data/heroes.json",JSON.stringify(heros), function(){
			console.log("file updated")
			response.json(heros); 
		});
	})
	//-----------------------------------------
}); 

app.listen(1234, function(){
	console.log("your server is now running on port 1234");
});
