define(['views/listPlayerView'], function(ListPlayerView){

    function start(){
        var players = JSON.parse(localStorage.players);
        ListPlayerView.render({players:players});
    }

    return {
        start:start
    };
});