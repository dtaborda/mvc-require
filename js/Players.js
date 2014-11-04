function generateHexString(length) {
  var ret = "";
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2);
  }
  return ret.substring(0,length);
}

// Constructor
function Players(){
    // always initialize all instance properties
    this.players = {};

	this.players = {
        "1":
            {
                "name": "Damian",
                "lastName": "Taborda",
                "birthday": "07/02/1980",
                "age": "34",
                "fieldPosition": "Delantero",
                "backNumber": "9",
                "skillfulLeg": "Derecho",
                "footballClubFans": "Boca",
                "avatar": ""
            },
        "2":
            {
                "name": "Leonel",
                "lastName": "Messi",
                "birthday": "24/06/1987",
                "age": "27",
                "fieldPosition": "Delantero",
                "backNumber": "10",
                "skillfulLeg": "Zurdo",
                "footballClubFans": "Barcelona",
                "avatar": ""
            },
        "3":
            {
                "name": "Carlos",
                "lastName": "Tevez",
                "birthday": "05/02/1984",
                "age": "30",
                "fieldPosition": "Delantero",
                "backNumber": "11",
                "skillfulLeg": "Derecho",
                "footballClubFans": "Juventus",
                "avatar": ""
            }
        }
    }

// class methods
Players.prototype.getAll = function() {
	console.log("Getting all Players ");
	console.log("from list: "+ JSON.stringify(this.players));
	return this.players;
};

Players.prototype.get = function(id) {
    console.log("Getting player" + id);
    console.log("from list: "+ JSON.stringify(this.players));
    var player = this.players[id];
    console.log("get player: " + JSON.stringify(this.players[id]));
    return player;
};

Players.prototype.save = function(player) {
     this.players[player.id] = player;
     console.log("Player saved: "+JSON.stringify(this.players));
};

Player.prototype.add = function(newPlayer){
    var key =  generateHexString(58);
    console.log("256-bit: " + key);
    this.players[key] = newPlayer;
    console.log("Player added: "+ JSON.stringify(this.players[key]));
}

// export the class
module.exports = new Players();