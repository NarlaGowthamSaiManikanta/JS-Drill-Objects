function mapObject(obj, cb) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        if (typeof (cb) === 'function') {
            let mapObj = {};

            for (key in obj) {
                let value = obj[key];
                mapObj[key] = cb(value, key);
            }

            return mapObj;
        } else {
            console.log('Second Argument should be a function.');
        }
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = mapObject;