define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');

        var player = parameters.players;

        var html = '<div class="row"><div class="col-md-3">';
            html += '<h2>Players</h2>';
            html += '<ul>';
        for (var i = 0, len = player.length; i < len; i++){
            html += '<li>' +
                        '<a class="player" href="#/players/' + i + '"><h3>' + player[i].name + player[i].lastName + '</h3>' +
                        '</a>' +
                    '</li>';
        }
        html += '</ul>';
        html += '</div>';
        html += '<div class="col-md-9">';
        html += '<div id="profile"></div>';
        html += '</div>';

        appDiv.innerHTML = html;
    }

    return {
        render:render
    };
});