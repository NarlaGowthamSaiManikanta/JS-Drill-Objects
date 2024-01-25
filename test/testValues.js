const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

const values = require('../values.js');

const testObjectValues = values(testObject);
console.log(testObjectValues);