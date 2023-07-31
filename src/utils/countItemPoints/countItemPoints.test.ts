import { countItemPoints } from './index';

describe( 'countItemPoints', () => {
    test( 'Get points without repeat', () => {
        expect(countItemPoints(0,2)).toBe(-2)
    })
    test( 'Get points after repeat', () => {
        expect(countItemPoints(2,1)).toBe(1)
    })
})