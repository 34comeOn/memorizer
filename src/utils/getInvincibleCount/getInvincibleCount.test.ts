import { getInvincibleCount } from './index';

describe('getInvincibleCount', () => {
    test('no repeats', ()=> {
        expect(getInvincibleCount(0, 2)).toBe(0)
    })
    test('repeats equals repeatTimesMayBeLost', ()=> {
        expect(getInvincibleCount(2, 2)).toBe(0)
    })
    test('repeats more than repeatTimesMayBeLost', ()=> {
        expect(getInvincibleCount(3, 2)).toBe(1)
    })
    test('repeats much more than repeatTimesMayBeLost', ()=> {
        expect(getInvincibleCount(4, 1)).toBe(3)
    })
})