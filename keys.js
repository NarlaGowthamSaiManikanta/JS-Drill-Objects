function keys(obj) {
    let objKeys = [];

    for (var key in obj) {
        objKeys.push(key);
    }

    return objKeys;
}

module.exports = keys;