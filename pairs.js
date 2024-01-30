function pairs(obj) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        let keyValuepairs = [];

        for (key in obj) {
            keyValuepairs.push([key, obj[key]])
        }

        return keyValuepairs;
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = pairs;