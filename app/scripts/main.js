require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap',
    'models/player',
    'router'
    ], function (app, $, bt, player, Router) {

    'use strict';

    var p1 = {
        name: 'Damian',
        lastName: 'Taborda',
        birthday: '07/02/1980',
        age: '34',
        fieldPosition: 'Delantero',
        backNumber: '9',
        skillfulLeg: 'Derecho',
        footballClubFans: 'Boca',
        avatar: ''
    };

    var p2 = {
        name: 'Leonel',
        lastName: 'Messi',
        birthday: '24/06/1987',
        age: '27',
        fieldPosition: 'Delantero',
        backNumber: '10',
        skillfulLeg: 'Zurdo',
        footballClubFans: 'Barcelona',
        avatar: ''
    };

    var p3 = {
        name: 'Carlos',
        lastName: 'Tevez',
        birthday: '05/02/1984',
        age: '30',
        fieldPosition: 'Delantero',
        backNumber: '11',
        skillfulLeg: 'Derecho',
        footballClubFans: 'Juventus',
        avatar: ''
    };

    var p4 = {
        name: 'Orion',
        lastName: 'Agustin',
        birthday: '26/07/1981',
        age: '33',
        fieldPosition: 'Arquero',
        backNumber: '1',
        skillfulLeg: 'Derecho',
        footballClubFans: 'Boca',
        avatar: ''
    };

    var p5 = {
        name: 'Schiavi',
        lastName: 'Rolando',
        birthday: '18/01/1973',
        age: '41',
        fieldPosition: 'Defensa',
        backNumber: '2',
        skillfulLeg: 'Derecho',
        footballClubFans: 'Boca',
        avatar: ''
    };

    var players = [new player(p1), new player(p2), new player(p3), new player(p4), new player(p5)];

    localStorage.players = JSON.stringify(players);

    Router.startRouting();

});