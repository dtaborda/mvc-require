define(function(){

    var routes = [{path:'/players', controller:'listPlayerController'},
                  {path:'/players/{playerId}', controller:'playerController'}];

    var defaultRoute = '/players';
    var currentHash = '';

    function match(path, route) {
        path = path.replace(/{[\d\w_]*}/g, '([\\d\\w_]*)');
        var re = new RegExp('^#' + path + '$');
        var matches = route.match(re);
        if (matches == null)
            return null;
        matches.shift();
        return matches;
    }

    function startRouting(){
        window.location.hash = window.location.hash || ('#' + defaultRoute);
        setInterval(hashCheck, 100);
    }

    function hashCheck(){
        if (window.location.hash != currentHash){
            for (var i = 0, currentRoute; currentRoute = routes[i++];){
                var matches = match(currentRoute.path, window.location.hash);
                if (matches != null)
                    loadController(currentRoute.controller, matches);
            }
            currentHash = window.location.hash;
        }
    }

    function loadController(controllerName, parameters){
        require(['controllers/' + controllerName], function(controller){
            controller.start.apply(controller, parameters);
        });
    }

    return {
        startRouting:startRouting
    };
});