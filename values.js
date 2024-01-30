function values(obj) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        let objValues = [];

        for (key in obj) {
            let value = obj[key];
            objValues.push(value);
        }

        return objValues;
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = values;