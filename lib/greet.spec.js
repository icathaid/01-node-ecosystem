'use strict'

const Greet = require('./greet');

describe('greet module', () => {
    var greet = new Greet;
    it('should return null if passed non string', () => {
        const expected = null;
        const actual = greet();
        expect(actual).toBe(expected)
    })
});