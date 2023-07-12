const UNPUNISHABLE_REPEAT_TIMES = 3;
const MAX_PUNISHMENT_FOR_LATE_PRACTICE = 2;

const REPEAT_TIMES_CONVERT_TO_POINTS = {
    0: 0,
    1: 1,
    2: 4,
    3: 8,
    4: 12,
    5: 24,
    6: 72,
  }

const getHoursSinceRepeat = (repeatedTimeStamp) => {
    const timeSinceRepeat = Date.now() - repeatedTimeStamp;
    return Math.floor(timeSinceRepeat/ (1000*60*60));
}

const countPunishmentPoints = (timesBeenRepeated, lastTimeRepeted) => {
    let punishPoints = 0;
    for (let i = 0; i <= MAX_PUNISHMENT_FOR_LATE_PRACTICE; i++) {
        if ((getHoursSinceRepeat(lastTimeRepeted) - REPEAT_TIMES_CONVERT_TO_POINTS[timesBeenRepeated - i]?? 0) >= 1) {
            punishPoints += 1;
        } 
    }
    return punishPoints;
}

const getPunishmentForLatePractice = (timesBeenRepeated, lastTimeRepeted) => {
    const newTimesBeenRepeated = timesBeenRepeated - countPunishmentPoints(timesBeenRepeated, lastTimeRepeted);
    if (timesBeenRepeated >= UNPUNISHABLE_REPEAT_TIMES) {
        return (newTimesBeenRepeated <= UNPUNISHABLE_REPEAT_TIMES? UNPUNISHABLE_REPEAT_TIMES: newTimesBeenRepeated); 
    }

    return (newTimesBeenRepeated <= 0? 0: newTimesBeenRepeated);
}

module.exports = getPunishmentForLatePractice;