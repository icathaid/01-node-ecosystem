'use strict';
const matherize = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  it('should return the same number given as input', () => {
    const expected = 6;
    const actual = matherize(6);
    expect(actual).toEqual(expected);
  });
});