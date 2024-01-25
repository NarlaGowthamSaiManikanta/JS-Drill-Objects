const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const keys = require('../keys.js');

const testObjectKeys = keys(testObject);
console.log(testObjectKeys);