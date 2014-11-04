define(function(){

    function render(parameters){
        var appDiv = document.getElementById('profile');

        var html = '<input id="player-name" />';
            html += '<button id="add">Add Player</button>';

        appDiv.innerHTML =html;
    }

    return {
        render:render
    };
});