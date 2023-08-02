import { ONE_HOUR_IN_MILLISECONDS } from '../../../constants/stockConstants';
import { countPunishmentPoints } from './index';

describe('countPunishmentPoints', () => {
    test('No practice, just created card', () => {
        expect(countPunishmentPoints(0, Date.now())).toBe(0)
    })
    test('No practice, 2 hours ago', () => {
        expect(countPunishmentPoints(0, Date.now() - ONE_HOUR_IN_MILLISECONDS*2)).toBe(3)
    })
    test('1 time practice 4 hours ago', () => {
        expect(countPunishmentPoints(1, Date.now() - ONE_HOUR_IN_MILLISECONDS*4)).toBe(3)
    })
    test('1 time practice 1 hours ago', () => {
        expect(countPunishmentPoints(2, Date.now() - ONE_HOUR_IN_MILLISECONDS*1)).toBe(1)
    })
    test('2 time practice 4 hours ago', () => {
        expect(countPunishmentPoints(2, Date.now() - ONE_HOUR_IN_MILLISECONDS*4)).toBe(2)
    })
})