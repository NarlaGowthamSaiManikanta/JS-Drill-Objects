function defaults(obj, defaultProps) {
    if (typeof (obj) === 'object' && !Array.isArray(obj)) {
        if (typeof (defaultProps) === 'object' && !Array.isArray(defaultProps)) {
            for (key in defaultProps) {
                if (obj[key] == undefined) {
                    obj[key] = defaultProps[key];
                }
            }

            return obj;
        } else {
            console.log('Second Argument should be an Object.');
        }
    } else {
        console.log('First Argument should be an Object.');
    }
}

module.exports = defaults;