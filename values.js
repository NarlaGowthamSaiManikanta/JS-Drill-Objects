function values(obj) {
    let objValues = [];

    for (key in obj) {
        value = obj[key];
        objValues.push(value);
    }

    return objValues;
}

module.exports = values;