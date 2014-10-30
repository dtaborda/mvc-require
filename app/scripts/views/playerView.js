define(function(){

    function render(parameters){
        var appDiv = document.getElementById('profile');

        var player = parameters.player;

        var html = '<h2>Profile</h2>';
            html += '<ul>';
            html += '<li>' + player.name + '</li>';
            html += '<li>' + player.lastName + '</li>';
            html += '<li>' + player.birthday + '</li>';
            html += '<li>' + player.age + '</li>';
            html += '<li>' + player.fieldPosition + '</li>';
            html += '<li>' + player.skillfulLeg + '</li>';
            html += '<li>' + player.footballClubFans + '</li>';
            html += '</ul>';

        appDiv.innerHTML = html;
    }

    return {
        render:render
    };
});