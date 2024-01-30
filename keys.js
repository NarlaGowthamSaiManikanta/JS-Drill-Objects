function keys(obj) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        let objKeys = [];

        for (var key in obj) {
            objKeys.push(key);
        }

        return objKeys;
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = keys;