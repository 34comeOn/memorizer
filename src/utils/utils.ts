export type Tcard = {
   ['_id']: string,   
    repeatedTimeStamp: number | null,
    timesBeenRepeated: number,
    title: string,
    answer: string,
    code?: string,
    filter?: string,
}

let filtersArray: string[] = [];
export let repeatNowArray: Tcard[] = [];
export let repeatInHourArray: Tcard[] = [];
export let repeatIn4HoursArray: Tcard[] = [];
export let repeatIn8HoursArray: Tcard[] = [];
export let repeatIn12HoursArray: Tcard[] = [];
export let repeatIn24HoursArray: Tcard[] = [];
export let repeatIn3DaysArray: Tcard[] = [];


const getHoursSinceRepeat = (repeatedTimeStamp: number) => {
    const timeSinceRepeat = Date.now() - repeatedTimeStamp;
    return Math.floor(timeSinceRepeat/ (1000*60*60));
}

type TRepeatTimesConvertToPoints = {
    [key: number]: number,
}
const RepeatTimesConvertToPoints:TRepeatTimesConvertToPoints = {
    0: 0,
    1: 1,
    2: 4,
    3: 8,
    4: 12,
    5: 24,
    6: 72
}

const countItemPoints = (repeatPoints: number, hours: number) => repeatPoints - hours;

const getItemPoints = (item: Tcard) => {
  const itemHours: number = getHoursSinceRepeat(item.repeatedTimeStamp ?? 0)
  return countItemPoints(RepeatTimesConvertToPoints[item.timesBeenRepeated], itemHours)
}

export const spreadCards = (dataBase: Tcard[]) => {
    filtersArray = [];
    repeatNowArray = [];
    repeatInHourArray = [];
    repeatIn4HoursArray = [];
    repeatIn8HoursArray = [];
    repeatIn12HoursArray = [];
    repeatIn24HoursArray = [];
    repeatIn3DaysArray = [];
    
    for (let card of dataBase) {
        if (card.filter && !filtersArray.includes(card.filter.slice(14))) {
            filtersArray.push(card.filter.slice(14))
        }

        if (getItemPoints(card) <= 0) {
            repeatNowArray.push(card)
            console.log('seichas')
        } else if (getItemPoints(card) <= 1) {
            repeatInHourArray.push(card)
        } else if (getItemPoints(card) <= 4) {
            repeatIn4HoursArray.push(card)
        } else if (getItemPoints(card) <= 8) {
            repeatIn8HoursArray.push(card)
        } else if (getItemPoints(card) <= 12) {
            repeatIn12HoursArray.push(card)
        } else if (getItemPoints(card) <= 24) {
            repeatIn24HoursArray.push(card)
        } else {
            repeatIn3DaysArray.push(card)
        }
    }
};

export {filtersArray}