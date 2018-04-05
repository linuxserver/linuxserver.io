const imageExclusions = [
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

const commarise = (num) => {

    var array = num.toString().split('');
    var index = -3;
    while (array.length + index > 0) {
        array.splice(index, 0, ',');
        index -= 4;
    }
    return array.join('');
};

const mapImages = (result) => {

    let images = {};

    result.forEach(image => {

        if (image.name.indexOf('baseimage') === -1 && imageExclusions.indexOf(image.name) === -1) {

            let mainImageName = image.name.replace('-aarch64', '');

            if (typeof images[mainImageName] === 'undefined') {
                images[mainImageName] = { pulls: 0 };
            }

            if (image.arch === 'x86') {
                images[mainImageName].x86 = { url: image.url };
            }

            else if (image.arch === 'armhf' && !image.name.endsWith('-aarch64')) {
                images[mainImageName].armhf = { url: image.url };
            }

            else if (image.arch === 'armhf' && image.name.endsWith('-aarch64')) {
                images[mainImageName].aarch64 = { url: image.url };
            }

            images[mainImageName].pulls += image.count;
        }
    });

    return images;
};

const commaAwareSort = (a, b, desc) => {

    a = (a === null || a === undefined) ? -Infinity : Number(a.replace(/,/g, ''))
    b = (b === null || b === undefined) ? -Infinity : Number(b.replace(/,/g, ''))

    if (a > b) {
        return 1
    }

    if (a < b) {
        return -1
    }

    return 0
};

const wildcardFilter = (filter, row) => String(row[filter.id]).indexOf(filter.value) > -1

export {
    mapImages,
    commarise,
    commaAwareSort,
    wildcardFilter
};
