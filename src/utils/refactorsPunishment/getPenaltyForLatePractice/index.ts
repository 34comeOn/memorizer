import { PUNISHMENT_POINTS_CONVERTED_FROM_REPEAT_TIMES, REPEAT_TIMES_CONVERT_TO_POINTS } from "../../../constants/stockConstants";

const countPenalty = (hoursSinceLastPractice: number, practiceCount: number, maximumPenalty: number): [number, number] => {
    
    const isTimeForPracticeExpaired = (REPEAT_TIMES_CONVERT_TO_POINTS[practiceCount] - hoursSinceLastPractice) <= 0;

    if (isTimeForPracticeExpaired && maximumPenalty && hoursSinceLastPractice) {
        const repeatTimesCompensateHours = (PUNISHMENT_POINTS_CONVERTED_FROM_REPEAT_TIMES[practiceCount]?? 0) - (PUNISHMENT_POINTS_CONVERTED_FROM_REPEAT_TIMES[practiceCount - 1]?? 0)
        
        const addingHoursDueToPenalty = repeatTimesCompensateHours;
        const penaltyAmount = 1;
        
        const isPracticeCountDecreasedToMinimum = practiceCount - penaltyAmount <= 0;
        const isPenaltyCountDecreasedToMinimum = maximumPenalty <= 1;

        if (isPracticeCountDecreasedToMinimum || isPenaltyCountDecreasedToMinimum) {
            return [addingHoursDueToPenalty, penaltyAmount];
        } else {
            const nextRoundCountPenalty = countPenalty((hoursSinceLastPractice - addingHoursDueToPenalty), (practiceCount - penaltyAmount), maximumPenalty - penaltyAmount);

            const nextRoundAddingHoursDueToPenalty = nextRoundCountPenalty[0];
            const nextRoundPenaltyAmount = nextRoundCountPenalty[1];

            return [addingHoursDueToPenalty + nextRoundAddingHoursDueToPenalty, penaltyAmount + nextRoundPenaltyAmount];
        }
    }

    return [0, 0];
}

export const getPenaltyForLatePractice = (hoursSinceLastPractice: number, practiceCount: number, maximumPenalty: number) => {
    const [addingHoursDueToPenalty, penaltyCount] = countPenalty(hoursSinceLastPractice, practiceCount, maximumPenalty);
    return {penaltyCount: penaltyCount, addingHoursDueToPenalty: addingHoursDueToPenalty}
}