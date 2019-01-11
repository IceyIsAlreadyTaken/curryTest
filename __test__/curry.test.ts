// const curry = require('../src/index');
import { curry } from '../src/index';

const sum = (a, b) => {
    return a + b;
}

describe('curry', () => {
    it('1 add 2 equal 3', () => {
        expect(curry(sum)(1)(2)).toBe(3);
    })
});