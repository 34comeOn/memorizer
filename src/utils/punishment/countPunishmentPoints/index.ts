import { MAX_PUNISHMENT_FOR_LATE_PRACTICE, REPEAT_TIMES_CONVERT_TO_POINTS } from "../../../constants/stockConstants";
import { getHoursSinceRepeat } from "../../getHoursSinceRepeat";

export const countPunishmentPoints = (timesBeenRepeated: number, lastTimeRepeted: number) => {
    let punishPoints = 0;
    for (let i = 0; i <= MAX_PUNISHMENT_FOR_LATE_PRACTICE; i++) {
        if ((getHoursSinceRepeat(lastTimeRepeted) - (REPEAT_TIMES_CONVERT_TO_POINTS[timesBeenRepeated - i]?? 0)) >= 1) {
            punishPoints += 1;
        } 
    }
    return punishPoints;
}