export type Tcard = {
   ['_id']: string,   
    repeatedTimeStamp: number | null,
    timesBeenRepeated: number,
    title: string,
    answer: string,
    code?: string,
    filter?: string,
}

export let repeatNowArray: Tcard[] = [];
export let repeatInHourArray: Tcard[] = [];
export let repeatIn4HoursArray: Tcard[] = [];
export let repeatIn8HoursArray: Tcard[] = [];
export let repeatIn12HoursArray: Tcard[] = [];
export let repeatIn24HoursArray: Tcard[] = [];
export let repeatIn3DaysArray: Tcard[] = [];
const lastRepeatedTime = 1671428196316;
const currentDate = Date.now();
const timeSinceRepeat = currentDate - lastRepeatedTime
console.log(timeSinceRepeat)
console.log(`Seconds ${Math.floor(timeSinceRepeat/ 1000)}`)
console.log(`Minutes ${Math.floor(timeSinceRepeat/ (1000*60))}`)
console.log(`Hours ${Math.floor(timeSinceRepeat/ (1000*60*60))}`)

const getHoursSinceRepeat = (repeatedTimeStamp: number | null ) => {
    if (repeatedTimeStamp) {
        const timeSinceRepeat = Date.now() - repeatedTimeStamp;
        return Math.floor(timeSinceRepeat/ (1000*60*60));
    }

    return false;
}

export const spreadCards = (dataBase: Tcard[]) => {
    console.log('spreadCards function works')
    repeatNowArray = [];
    repeatInHourArray = [];
    repeatIn4HoursArray = [];
    repeatIn8HoursArray = [];
    repeatIn12HoursArray = [];
    repeatIn24HoursArray = [];
    repeatIn3DaysArray = [];
    for (let card of dataBase) {
        switch (card.timesBeenRepeated) {
            case 0:
                repeatNowArray.push(card);
                break;
            case 1:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) < 0.5) {
                    repeatInHourArray.push(card);
                } else if (0.5 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 1) {
                    repeatInHourArray.push(card);
                } else if (1 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 3) {
                    repeatNowArray.push(card);
                } else if (3 <= getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                // (getHoursSinceRepeat(card.repeatedTimeStamp) < 2) ? repeatInHourArray.push(card) : repeatNowArray.push(card);
                break;
            case 2:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) < 2) {
                    repeatIn4HoursArray.push(card);
                } else if (2 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 3) {
                    repeatInHourArray.push(card);
                } else if (3 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 6) {
                    repeatNowArray.push(card);
                } else if (6 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                } else if (12 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                break;
            case 3:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) < 4) {
                    repeatIn8HoursArray.push(card);
                } else if (4 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 6) {
                    repeatIn4HoursArray.push(card);
                } else if (6 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 8) {
                    repeatInHourArray.push(card);
                } else if (8 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 11) {
                    repeatNowArray.push(card);
                } else if (11 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                } else if (24 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                break;
            case 4:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) <= 11) {
                    repeatIn12HoursArray.push(card);
                } else if (12 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) < 16) {
                    repeatNowArray.push(card);
                } else if (16 <= getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                } else if (30 <= getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                break;
            case 5:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) <= 22) {
                    repeatIn24HoursArray.push(card);
                } else if (22 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) <= 28) {
                    repeatNowArray.push(card);
                } else if (28 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                } else if (48 <= getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                break;
            case 6:
                if (getHoursSinceRepeat(card.repeatedTimeStamp) < 65) {
                    repeatIn3DaysArray.push(card);
                } else if (65 <= getHoursSinceRepeat(card.repeatedTimeStamp) && getHoursSinceRepeat(card.repeatedTimeStamp) <= 80) {
                    repeatNowArray.push(card);
                } else if (80 < getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                } else if (110 <= getHoursSinceRepeat(card.repeatedTimeStamp)) {
                    repeatNowArray.push(card)
                }
                break;
            default:
                repeatNowArray.push(card);
        }
    }
}