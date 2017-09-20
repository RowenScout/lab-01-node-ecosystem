'use strict';

module.exports = function(input) {

  if (typeof input === 'string') {

    let output = 'hello ';
    output += input;
    return output;

  } else{

    return null;
  }
};
