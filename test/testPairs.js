const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const pairs = require('../pairs.js');

const testObjectPairs = pairs(testObject);
console.log(testObjectPairs);