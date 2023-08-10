import { getPenaltyForLatePractice } from './index';

describe('getPenaltyForLatePractice no extra time', () => {
    test('0 hours, 0 practice - should be no penalty, but forbidden case', () => {
        expect(getPenaltyForLatePractice(0, 0, 3)).toMatchObject({penaltyCount: 0, addingHoursDueToPenalty: 0})
    })
    test('0 hours, 1 practice - should be no penalty', () => {
        expect(getPenaltyForLatePractice(0, 1, 3)).toMatchObject({penaltyCount: 0, addingHoursDueToPenalty: 0})
    })
    test('1 hour, 1 practice - get penalty', () => {
        expect(getPenaltyForLatePractice(1, 1, 3)).toMatchObject({penaltyCount: 1, addingHoursDueToPenalty: 1})
    })
    test('3 hours, 1 practice - get penalty', () => {
        expect(getPenaltyForLatePractice(3, 1, 3)).toMatchObject({penaltyCount: 1, addingHoursDueToPenalty: 1})
    })
    test('3 hours, 2 practices - should be no penalty', () => {
        expect(getPenaltyForLatePractice(3, 2, 3)).toMatchObject({penaltyCount: 0, addingHoursDueToPenalty: 0})
    })
    test('4 hours, 2 practices - get penalty', () => {
        expect(getPenaltyForLatePractice(4, 2, 3)).toMatchObject({penaltyCount: 1, addingHoursDueToPenalty: 4})
    })
    test('5 hours, 2 practicess - get penalty', () => {
        expect(getPenaltyForLatePractice(5, 2, 3)).toMatchObject({penaltyCount: 2, addingHoursDueToPenalty: 5})
    })
    test('6 hours, 2 practices - get penalty', () => {
        expect(getPenaltyForLatePractice(6, 2, 3)).toMatchObject({penaltyCount: 2, addingHoursDueToPenalty: 5})
    })
    test('15 hours, 3 practices - get penalty', () => {
        expect(getPenaltyForLatePractice(15, 3, 1)).toMatchObject({penaltyCount: 1, addingHoursDueToPenalty: 8})
    })
    test('15 hours, 3 practices, no punishment - no penalty', () => {
        expect(getPenaltyForLatePractice(15, 3, 0)).toMatchObject({penaltyCount: 0, addingHoursDueToPenalty: 0})
    })
})