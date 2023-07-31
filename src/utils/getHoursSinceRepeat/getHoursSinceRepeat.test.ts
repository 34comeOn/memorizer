import { getHoursSinceRepeat } from './index'; 

describe('getHoursSinceRepeat', () => {
    test('Count hours since NOW', () => {
        expect(getHoursSinceRepeat(Date.now())).toBe(0)
    })
    test('Count hours since 1 hour', () => {
        expect(getHoursSinceRepeat(Date.now() - 3600000)).toBe(1)
    })
    test('Count hours since 5,5 hour', () => {
        expect(getHoursSinceRepeat(Date.now() - 19800000)).toBe(5)
    })
})