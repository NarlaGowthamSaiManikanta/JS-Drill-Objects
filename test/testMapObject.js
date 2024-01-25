const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const mapObject = require('../mapObject.js');

const mappedTestObject = mapObject(testObject, (value, key) => {
    if (value.constructor === String) {
        if (key === 'name') {
            return 'Mr.' + value;
        } else if (key === 'location') {
            return value + ' city';
        }
    } else {
        return value + 2;
    }
});
console.log(mappedTestObject);