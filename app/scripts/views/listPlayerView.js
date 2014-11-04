define(function(){

    function render(parameters){
        var appDiv = document.getElementById('app');

        var player = parameters.players;

        var html = '<div class="row"><div class="col-md-3">';
            html += '<div class="list-group">';
            html += '<a href="#/players/add" class="list-group-item list-group-item-info"><h2>Players</h2></a>';

        for (var i in player){
            html += '<a class="list-group-item" href="#/players/' + i + '">' +
                        '<h3>' + player[i].name + player[i].lastName + '</h3>' +
                    '</a>' ;
        }

        html += '</div>';
        html += '</div>';
        html += '<div class="col-md-9" id="profile">';
        html += '</div>';

        appDiv.innerHTML = html;
    }

    return {
        render:render
    };
});