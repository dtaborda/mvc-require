var express = require("express");
var bodyParser = require("body-parser");

var Players = require("./js/Players");

var app = express();

server = require('http').createServer(app);

app.use(express.static(__dirname + '/dist'));

console.log(__dirname);

app.get('/', function(req, res) {
  res.json(__dirname + ' It work\'s!');
});

var port = Number(process.env.PORT || 5000);

server.listen(port);
console.log("Listening on " + port);

app.use(bodyParser.json());

///////////////////////////API UTILS//////////////////////////////////////////
var bodyHasRequiredProperties = function(body, properties){
	for (var i in properties) {
		var prop = properties[i];
		if(!body.hasOwnProperty(prop)) {
		    return false;
		} else {
			if (!body[prop]) {
				return false;
			}
		}
	}
	return true;
}
///////////////////////////API UTILS END//////////////////////////////////////////

var router = express.Router(); 				// get an instance of the express Router

app.all('*', function(req, res, next) {
  console.log("Habilitando CORS...");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

///////////////////////// Soccer API //////////////////////////////////

//?access_token=<userId>
router.get('/players', function(req, res) {
	console.log("API servicies, Get Players");
	console.log(req);
	console.log(res);

	var players = Players.getAll();

	if(Players){
	    return res.json(players);
	}else{
		res.statusCode = 404;
	    return res.json("Are not player registered in the team.");
	}

});

router.get('/players/:id', function(req, res) {
	console.log("API servicies, Get Player");

	var id = req.params.id;

	var player = Players.get(id);

	if (player) {
		return res.json(player);
	}
	else {
		res.statusCode = 400;
	    return res.json("The player doesn't exist.");
	}
});

router.post('/players/add', function(req, res) {
	console.log("API servicies, Put new Player");

	var id = req.params.id;

	var player = Players.get(id);

	if (player) {
		return res.json(player);
	}
	else {
		res.statusCode = 400;
	    return res.json("The player doesn't exist.");
	}
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);




