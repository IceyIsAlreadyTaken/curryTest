import { partial } from '../src/index';

const sum = (a: number, b: number): number => {
    return a + b;
}

describe('partial', () => {
    it('1 add 2 equal 3', () => {
        expect(partial(sum, undefined, 2)(1)).toBe(3);
    })
})