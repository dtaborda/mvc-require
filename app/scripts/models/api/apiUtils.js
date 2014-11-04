define(["jquery"], function($) {

    function getData(options) {
        $.ajax({
            url: options.apiURL,
            dataType: options.format,
            method: options.method,
            jsonpCallback: options.jsonpCallback,
            success: options.successCallback || renderData,
            error: options.errorCallback,
            timeout: options.timeout
        });
    };

    return {
        getData: getData
    }
});
