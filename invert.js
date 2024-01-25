function invert (obj) {
    let invertedObj = {};

    for (key in obj) {
        value = obj[key];
        invertedObj[value] = key;
    }

    return invertedObj;
}

module.exports = invert;