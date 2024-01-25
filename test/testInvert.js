const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const invert = require('../invert.js');

const invertedTestObject = invert(testObject);
console.log(invertedTestObject);