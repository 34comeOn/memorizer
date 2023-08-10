import { getItemPoints } from './index';

describe('getItemPoints', () => {
    test('Never repeat card (card created 1000 hours ago)', () => {
        expect(getItemPoints(Date.now()- 3600000*1000, 0)).toBe(-1000)
    })
    test('Repeat card 1 time just now', () => {
        expect(getItemPoints(Date.now(), 1)).toBe(1)
    })
    test('Repeat card 1 time 1 hour ago', () => {
        expect(getItemPoints(Date.now() - 3600000, 1)).toBe(0)
    })
    test('Repeat card 2 times 1 hour ago', () => {
        expect(getItemPoints(Date.now() - 3600000, 2)).toBe(3)
    })
    test('Repeat card 2 times 3 hours ago', () => {
        expect(getItemPoints(Date.now() - 3600000*3, 2)).toBe(1)
    })
    test('Repeat card 2 times 4 hours ago', () => {
        expect(getItemPoints(Date.now() - 3600000*4, 2)).toBe(0)
    })
    test('Repeat card 6 times 73 hours ago', () => {
        expect(getItemPoints(Date.now() - 3600000*73, 6)).toBe(-1)
    })
})