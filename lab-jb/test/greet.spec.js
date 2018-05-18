const greet = require('../lib/greet');

describe('greet module', () => {

    it('should return null if passed non string', () => {

        const expected = null;

        const actual = greet();

        expect(actual).toBe(expected);

    });

    it('should return null if passed non string', () => {

        const expected = null;

        const actual = greet(0);

        expect(actual).toBe(expected);

    });

    it('should return Hello, [string] if passed name', () => {

        const expected = 'Hello, Tama';

        const actual = greet('Tama');

        expect(actual).toBe(expected);

    });
});