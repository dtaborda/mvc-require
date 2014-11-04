define(["models/api/apiUtils"], function(apiUtils){

    var apiUrl = "http://localhost:5000/api";

    var apiPlayersUrl = apiUrl + '/players';

    function getPlayers(success, error){
        apiUtils.getData({
            apiURL: apiPlayersUrl,
            successCallback: function(data) { success(data); },
            errorCallback: function(reason) { error(reason); }
        });
    };

    function getPlayer(id, success, error){
        apiUtils.getData({
            apiURL: apiPlayersUrl + '/' + id,
            successCallback: function(data) { success(data); },
            errorCallback: function(reason) { error(reason); }
        });
    }

    function player(player){
        this.name = player.name;
        this.lastName = player.lastName;
        this.birthday = player.birthday;
        this.age = player.age;
        this.fieldPosition = player.fieldPosition;
        this.backNumber = player.backNumber;
        this.skillfulLeg = player.skillfulLeg;
        this.footballClubFans = player.footballClubFans;
        this.avatar = player.avatar;
    };

    return{
        getPlayers: getPlayers,
        getPlayer: getPlayer
    }
});