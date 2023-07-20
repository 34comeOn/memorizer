const {
    UNPUNISHABLE_REPEAT_TIMES,
    REPEAT_TIMES_CONVERT_TO_POINTS,
    MAX_PUNISHMENT_FOR_LATE_PRACTICE,
} = require('./serverConstants');

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

exports.getPunishmentForLatePractice = (timesBeenRepeated, lastTimeRepeted) => {
    const newTimesBeenRepeated = timesBeenRepeated - countPunishmentPoints(timesBeenRepeated, lastTimeRepeted);
    if (timesBeenRepeated >= UNPUNISHABLE_REPEAT_TIMES) {
        return (newTimesBeenRepeated <= UNPUNISHABLE_REPEAT_TIMES? UNPUNISHABLE_REPEAT_TIMES: newTimesBeenRepeated); 
    }

    return (newTimesBeenRepeated <= 0? 0: newTimesBeenRepeated);
}

exports.validateAllRequestData = (validationSchema) => {
    return validationSchema.every(validationItem => {
        const value = validationItem[0];
        const funcToValidateValue = validationItem[1];
        const regEx = validationItem[2]
        console.log(regEx? funcToValidateValue( value, regEx): funcToValidateValue(value))
        return regEx? funcToValidateValue( value, regEx): funcToValidateValue(value);
    })
}

exports.validateString = (str) => typeof str === 'string';
exports.validateBoolean = (bool) => typeof bool === 'boolean';
exports.validateNumber = (number) => typeof number === 'number';
exports.validateIsArray = (array) => Array.isArray(array);
exports.validateWithRegEx = (val, regEx) => regEx.test(val);
