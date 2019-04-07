var API_URL = "https://fleet.linuxserver.io/api/v1/images";

var pullManager = (function($) {

    var getRawStats = function() {
        $.ajax({ url: API_URL }).done(formatPullData);
    };

    var formatNumber = function(num) {

        var array = num.toString().split('');
        var index = -3;
        
        while (array.length + index > 0) {
            array.splice(index, 0, ',');
            index -= 4;
        }
        
        return array;
    };

    var renderNumber = function(value) {

        if (value === ',') {
            return $("<div class=\"pull-stat-comma\">" + value + "</div>");
        } else {
            return $("<div class=\"pull-stat-number\">" + value + "</div>");
        }
    };

    var formatPullData = function(result) {

        formatNumber(result.data.totalPullCount).map(function (number) {
            $('#docker-pulls').append(renderNumber(number));
        });
    };

    var initialise = function() {
        getRawStats();
    }

    return {
        init: initialise
    }

}(jQuery));