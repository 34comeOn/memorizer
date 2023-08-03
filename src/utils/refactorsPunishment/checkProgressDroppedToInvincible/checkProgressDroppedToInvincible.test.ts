import { checkProgressDroppedToInvincible } from './index';

describe('checkProgressDroppedToInvincible', () => {
    test('progress equals invincible number', () => {
        expect(checkProgressDroppedToInvincible(1, 1)).toBe(true)
    })
    test('progress not equals invincible number', () => {
        expect(checkProgressDroppedToInvincible(2, 1)).toBe(false)
    })
})