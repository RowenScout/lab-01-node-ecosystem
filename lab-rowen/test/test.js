'use strict';

const expect = require('expect');
const mathy = require('../lib/arithmetic.js');
const greet = require('../lib/greet.js');
const assert = require('assert');

describe('greet', function() {

  describe('greet', function() {

    it('should return hello world', function() {

      assert.equal('hello world', greet('world'));

    });

    it('should return null when called on integers', function() {

      assert.equal(null, greet(1));

    });

    it('should return null when called on booleans', function() {

      assert.equal(null, greet(true));

    });

    it('should return null when called on null', function() {

      assert.equal(null, greet(null));


    });
  });
});

describe('arithmetic', function() {

  describe('addy', function() {

    it('addy(1, 2) returns 3', function() {

      assert.equal(3, mathy.addy(1, 2));

    });

    it('returns null in case of invalid input', function() {

      assert.equal(null, mathy.addy('string', true));

    });

  });

  describe('subby', function() {

    it('subby(5, 4) returns 1 ', function() {

      assert.equal(1, mathy.subby(5, 4));

    });

    it('returns null in case of invalid input', function() {

      assert.equal(null, mathy.subby('string', true));

    });
  });
});
