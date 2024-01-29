function mapObject (obj, cb) {
    let mapObj = {};

    for (key in obj) {
        let value = obj[key];
        mapObj[key] = cb(value, key);
    }

    return mapObj;
}

module.exports = mapObject;