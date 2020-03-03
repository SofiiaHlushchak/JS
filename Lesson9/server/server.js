var express =  require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function(request, response){
           console.log("Start page is running");
           response.send("<h1>Welcome to the lesson regarding AJAX</h1>");
           });
           

server.get("/formGet", function (request, response) {
    console.log("Form receipted by GET.");
    var obj = request.query;
    console.log(obj);
    console.log(obj.lname += ".ValidatedByGET");
    console.log(obj.fname += ".ValidatedByGET");
    console.log(obj.age += ".ValidatedByGET");
    console.log(obj.address += ".ValidatedByGET");
	response.send(obj);
});

server.post("/formPost", function (request, response) {
    console.log("Form receipted by POST.");
    var obj = request.body;
    console.log(obj);
    console.log(obj.lName += ".ValidatedByPOST");
    console.log(obj.fName += ".ValidatedByPOST");
    console.log(obj.Age += ".ValidatedByPOST");
    console.log(obj.Address += ".ValidatedByPOST");
    response.send(obj); 
});

server.listen(3000); //the server object listens on po