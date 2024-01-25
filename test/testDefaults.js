const iceCream = {flavor: "chocolate"};

const defaults = require('../defaults.js');

const defaultIceCream = defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
console.log(defaultIceCream);