'use strict'

const greet = require('../lib/greet');

describe('greet module', () => {
    it('should return null if passed non string', () => {
        const expected = null;
        const actual = greet;
        expect(actual).toBe(expected)
    })
});