'use strict';
const matherize = require('../lib/arithmetic.js');
// addition tests
describe('addition module', () => {
  it('should return 2 if given 1 and 1', () => {
    const expected = 2;
    const actual = matherize.summerator(1, 1);
    expect(actual).toEqual(expected);
  });
  it('should return undefined if input contains an undefined value', () => {
    const expected = null;
    const actual = matherize.summerator(1, null);
    expect(actual).toEqual(expected);
  });
  it('should return null if input contains a null value', () => {
    const expected = null;
    const actual = matherize.summerator(1, null);
    expect(actual).toEqual(expected);
  });
  it('should return null if input contains NaN', () => {
    const expected = null;
    const actual = matherize.summerator(1, NaN);
    expect(actual).toEqual(expected);
  });
});
//  subtraction tests
describe('subtraction module', () => {
  it('should return 0 if given 2 and 2', () => {
    const expected = 0;
    const actual = matherize.subtractifier(2,2);
    expect(actual).toEqual(expected);
  });
  it('should return -5 if given 5 and 10', () => {
    const expected = -5;
    const actual = matherize.subtractifier(5, 10);
    expect(actual).toEqual(expected);
  });
  it('should return 25 if given -5 and -35', () => {
    const expected = 30;
    const actual = matherize.subtractifier(-5, -35);
    expect(actual).toEqual(expected);
  });
  it('should return null if given a null value', () => {
    const expected = null;
    const actual = matherize.subtractifier(4, null);
    expect(actual).toEqual(expected);
  });
  it('should return null if given a NaN value', () => {
    const expected = null;
    const actual = matherize.subtractifier(6, NaN);
    expect(actual).toEqual(expected);
  });
  it('should return null if given an undefined value', () => {
    const expected = null;
    const actual = matherize.subtractifier(45, undefined);
    expect(actual).toEqual(expected);
  });
});