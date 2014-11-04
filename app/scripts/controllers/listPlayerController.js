define(['views/listPlayerView', 'models/player'], function(ListPlayerView, Player){

    function success(data){
        var players = data;
        ListPlayerView.render({players:players});
    };

    function error(reason){
        console.log("Error!!!" + reason);
    }

    function start(){
        Player.getPlayers(success, error);
    }

    return {
        start:start
    };
});