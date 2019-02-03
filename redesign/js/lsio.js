var API_URL = "https://next.linuxserver.io/dockerhub-jsonstats/stats";

if (!String.prototype.startsWith) {
    
    String.prototype.startsWith = function(search, pos) {
		return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	};
}

var imageManager = (function($) {

    var IMAGE_EXCLUSIONS = [
        'apache',
        'argus',
        'dillinger',
        'dokuwiki',
        'emby',
        'flood',
        'healthchecks',
        'home-assistant',
        'maraschino',
        'mysql',
        'ozwcp',
        'sickbeard',
        'sickgear',
        'watcher',
        'zoneminder'
    ];

    var getImages = function() {
        $.ajax({ url: API_URL }).done(formatImageData);
    };

    var commarise = function (num) {

        var array = num.toString().split('');
        var index = -3;
        
        while (array.length + index > 0) {
            array.splice(index, 0, ',');
            index -= 4;
        }
        
        return array.join('');
    };

    var formatImageData = function(result) {
        
        var mappedImages = mapImages(result);

        Object.keys(mappedImages).sort().map(function (image) {

            var div = $(
                '<div class="docker-image col col-sm-12 col-md-4 col-lg-3" data-image-name="' + image + '">' +
                    '<div class="docker-image-detail" title="' + commarise(mappedImages[image].pulls) + ' pulls">' +
                        '<a target="_blank" href="' + mappedImages[image].url + '">' +
                            '<img src="img/moby.png" title="' + commarise(mappedImages[image].pulls) + ' pulls" alt="Blue whale moby Docker Logo" />' +
                        '</a>' +
                        '<h3>' + image + '</h3>' +
                    '</div>' +
                    '<div clas="image-tags">' +
                    
                    '</div>' +
                '</div>'
            );

            $('#image-list').append(div);
        });
    };

    var mapImages = function (result) {

        var images = {};
    
        result.forEach(function (image) {
    
            if (image.name.indexOf('baseimage') === -1 && IMAGE_EXCLUSIONS.indexOf(image.name) === -1) {
    
                let mainImageName = image.name.replace('-aarch64', '');
    
                if (typeof images[mainImageName] === 'undefined') {
                    images[mainImageName] = { pulls: 0 };
                }
    
                if (image.arch === 'x86') {
                    images[mainImageName].url = image.url ;
                }
    
                images[mainImageName].pulls += image.count;
            }
        });
    
        return images;
    };

    var initialise = function () {

        $('#searchImages').on('keyup', function() {
            refineSearch($(this).val());
        });

        getImages();
    };

    var refineSearch = function(term) {

        var images = $('.container-images').find('.docker-image');

        if (term.length === 0) {
            
            images.each(function () {
                $(this).show();
            });
        
        } else {

            images.each(function () {
    
                var $image = $(this);

                if ($image.attr('data-image-name').startsWith(term)) {
                    $image.show();
                } else {
                    $image.hide();
                }
            });
        }
    };

    return {
        init: initialise
    }

}(jQuery));

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

        var aggregatedCount = 0;

        result.forEach(function (image) {
            aggregatedCount += image.count;
        });

        formatNumber(aggregatedCount).map(function (number) {
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