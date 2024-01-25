function defaults (obj, defaultProps) {
    for (key in defaultProps) {
        if (obj[key] == undefined) {
            obj[key] = defaultProps[key];
        }
    }

    return obj;
}

module.exports = defaults;