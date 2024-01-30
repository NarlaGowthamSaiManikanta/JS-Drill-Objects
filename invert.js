function invert(obj) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        let invertedObj = {};

        for (key in obj) {
            let value = obj[key];
            invertedObj[value] = key;
        }

        return invertedObj;
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = invert;