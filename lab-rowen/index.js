'use strict';

const maths = require('./lib/arithmetic.js');
const greet = require('./lib/greet.js');

console.log(greet('Ro-ro'));
console.log('maths.addy(1, 2) returns: ' + maths.addy(1, 2));
console.log('maths.subby(5, 5) returns: ' + maths.subby(5, 5));
