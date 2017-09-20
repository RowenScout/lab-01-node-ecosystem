'use strict';

let arithmetic = module.exports = {};

arithmetic.addy = function(a, b) {

  if(typeof a === 'number' &&
     typeof b === 'number'){

    return a += b;

  }else {

    return null;
  }
};

arithmetic.subby = function(a, b) {

  if(typeof a === 'number' &&
     typeof b === 'number'){

    return a -= b;

  }else {

    return null;
  }
};
