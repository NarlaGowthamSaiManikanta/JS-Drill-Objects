function values(obj) {
    let objValues = [];

    for (key in obj) {
        let value = obj[key];
        objValues.push(value);
    }

    return objValues;
}

module.exports = values;