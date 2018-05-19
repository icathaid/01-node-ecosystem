'use strict';

const greet = require('../lib/greet');

describe('greet module', () => {
  it('should return null if passed non string', () => {
    const expected = null;
    const actual = greet();
    expect(actual).toBe(expected);
  });
  it('should return world when invoked with world as the first argument', () => {
    const expected = 'Hello world';
    const actual = greet('world');
    expect(actual).toBe(expected);
  });
});
