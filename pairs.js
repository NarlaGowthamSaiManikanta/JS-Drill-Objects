function pairs (obj) {
    let keyValuepairs = [];

    for (key in obj) {
        keyValuepairs.push([key, obj[key]])
    }

    return keyValuepairs;
}

module.exports = pairs;