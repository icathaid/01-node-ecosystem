'use strict';
const matherize = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  it('should return 42 to show it is calling the function correctly.', () => {
    const expected = 42;
    const actual = matherize.summerator();
    expect(actual).toEqual(expected);
  });
  it('should return 16 to show it is calling the subtraction function correctly', () => {
    const expected = 16;
    const actual = matherize.subtractifier();
    expect(actual).toEqual(expected);
  });
});


//  write separate test suite for subtraction module
