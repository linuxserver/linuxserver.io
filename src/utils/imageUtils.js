const imageExclusions = [
    'apache',
    'argus',
    'dillinger',
    'dokuwiki',
    'emby',
    'flood',
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
}

const mapImages = (result) => {

    let images = {};

    result.forEach(image => {

        if (image.name.indexOf('baseimage') === -1 && imageExclusions.indexOf(image.name) === -1) {

            let mainImageName = image.name.replace('-aarch64', '');
            if (typeof images[mainImageName] === 'undefined') {

                images[mainImageName] = {

                    x86: image.arch === 'x86',
                    armhf: image.arch === 'armhf' && !image.name.endsWith('-aarch64'),
                    aarch64: image.arch === 'armhf' && image.name.endsWith('-aarch64'),
                    pulls: image.count
                }

            } else {

                if (image.arch === 'x86') {
                    images[mainImageName].x86 = true;
                }

                else if (image.arch === 'armhf' && !image.name.endsWith('-aarch64')) {
                    images[mainImageName].armhf = true;
                }

                else if (image.arch === 'armhf' && image.name.endsWith('-aarch64')) {
                    images[mainImageName].aarch64 = true;
                }

                images[mainImageName].pulls += image.count;
            }
        }
    });

    return images;
}

export {
    mapImages,
    commarise
};
