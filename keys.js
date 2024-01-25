function keys(obj) {
    let keys = [];

    for (var key in obj) {
        keys.push(key);
    }

    return keys;
}

module.exports = keys;