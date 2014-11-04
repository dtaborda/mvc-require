define(['views/playerView', 'models/player'], function(PlayerView, Player){

    function success(data){
        var player = data;
        PlayerView.render({player:player});
    };

    function error(reason){
        console.log("Error!!!" + reason);
    }

    function start(playerId){
        Player.getPlayer(playerId, success, error);
    }

    return {
        start:start
    };
});