define(['views/newPlayerView', 'models/player'], function(NewPlayerView, Player){

    function start(){
        NewPlayerView.render();
        bindEvents();
    }

    function bindEvents(){
        document.getElementById('add').addEventListener('click', function(){
            var players = JSON.parse(localStorage.players);

            var p = {
                name: document.getElementById('player-name').value,
                lastName: 'Taborda',
                birthday: '07/02/1980',
                age: '34',
                fieldPosition: 'Delantero',
                backNumber: '9',
                skillfulLeg: 'Derecho',
                footballClubFans: 'Boca',
                avatar: ''
            };
            players.push(new Player(p));
            localStorage.players = JSON.stringify(players);
            window.location.hash = '#/players';
        }, false);
    }

    return {
        start:start
    };
});