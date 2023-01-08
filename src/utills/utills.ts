export type Tcard = {
    id: number,   
    repeatedTimeStamp: number | null,
    timesBeenRepeated: number,
    title: string,
    answer: string,
    code?: string,
}

export let repeatNowArray: Tcard[] = [];
export const repeatInHourArray: Tcard[] = [];
export const repeatIn4HoursArray: Tcard[] = [];
export const repeatIn8HoursArray: Tcard[] = [];
export const repeatIn12HoursArray: Tcard[] = [];
export const repeatIn24HoursArray: Tcard[] = [];
export const repeatIn3DaysArray: Tcard[] = [];
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
    repeatNowArray = [];
    for (let card of dataBase) {
        switch (card.timesBeenRepeated) {
            case 0:
                repeatNowArray.push(card);
                break;
            case 1:
                (getHoursSinceRepeat(card.repeatedTimeStamp) < 2) ? repeatInHourArray.push(card) : repeatNowArray.push(card);
                break;
            case 2:
                (getHoursSinceRepeat(card.repeatedTimeStamp) < 5) ? repeatIn4HoursArray.push(card) : repeatInHourArray.push(card); 
                break;
            default:
                repeatNowArray.push(card);
        }
    }
}