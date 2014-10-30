define(['views/playerView'], function(PlayerView){

    function start(playerId){
        var players = JSON.parse(localStorage.players);
        var player = players[playerId];
        PlayerView.render({player:player});
    }

    return {
        start:start
    };
});