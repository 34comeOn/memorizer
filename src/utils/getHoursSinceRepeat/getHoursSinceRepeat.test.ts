import { ONE_HOUR_IN_MILLISECONDS } from '../../constants/stockConstants';
import { getHoursSinceRepeat } from './index'; 

describe('getHoursSinceRepeat', () => {
    test('Count hours since NOW', () => {
        expect(getHoursSinceRepeat(Date.now())).toBe(0)
    })
    test('Count hours since 1 hour', () => {
        expect(getHoursSinceRepeat(Date.now() - ONE_HOUR_IN_MILLISECONDS)).toBe(1)
    })
    test('Count hours since 5,5 hour', () => {
        expect(getHoursSinceRepeat(Date.now() - ONE_HOUR_IN_MILLISECONDS*5.5)).toBe(5)
    })
})