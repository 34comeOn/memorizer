export type Tcard = {
   ['_id']: string,   
    repeatedTimeStamp: number | null,
    timesBeenRepeated: number,
    title: string,
    answer: string,
    code?: string,
    filter?: string,
}

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

const pullFiltersTitlesFromData = (item: Tcard,filtersArray: string[]) => {
    if (item.filter && !filtersArray.includes(item.filter.slice(14))) {
        filtersArray.push(item.filter.slice(14))
    }
}

const sortItemInGroup = (item: Tcard,
    repeatNowGroup: Tcard[],
    repeatIn1HourGroup: Tcard[],
    repeatIn4HoursGroup: Tcard[],
    repeatIn8HoursGroup: Tcard[],
    repeatIn12HoursGroup: Tcard[],
    repeatIn24HoursGroup: Tcard[],
    repeatIn3DaysGroup: Tcard[],
    ) => {
    
    if (getItemPoints(item) <= 0) {
        repeatNowGroup.push(item)
    } else if (getItemPoints(item) <= 1) {
        repeatIn1HourGroup.push(item)
    } else if (getItemPoints(item) <= 4) {
        repeatIn4HoursGroup.push(item)
    } else if (getItemPoints(item) <= 8) {
        repeatIn8HoursGroup.push(item)
    } else if (getItemPoints(item) <= 12) {
        repeatIn12HoursGroup.push(item)
    } else if (getItemPoints(item) <= 24) {
        repeatIn24HoursGroup.push(item)
    } else {
        repeatIn3DaysGroup.push(item)
    }
}

export const spreadCollectionData = (dataBase: Tcard[]) => {
    const filtersOfCollection: string[] = [];

    const repeatNowGroup: Tcard[] = [];
    const repeatIn1HourGroup: Tcard[] = [];
    const repeatIn4HoursGroup: Tcard[] = [];
    const repeatIn8HoursGroup: Tcard[] = [];
    const repeatIn12HoursGroup: Tcard[] = [];
    const repeatIn24HoursGroup: Tcard[] = [];
    const repeatIn3DaysGroup: Tcard[] = [];

    for (let item of dataBase) {
        pullFiltersTitlesFromData(item,filtersOfCollection);
        
        sortItemInGroup(item,
            repeatNowGroup,
            repeatIn1HourGroup,
            repeatIn4HoursGroup,
            repeatIn8HoursGroup,
            repeatIn12HoursGroup,
            repeatIn24HoursGroup,
            repeatIn3DaysGroup
        );
    }

    const orgonizedGroupsOfCollection = [
        repeatNowGroup, 
        repeatIn1HourGroup, 
        repeatIn4HoursGroup,
        repeatIn8HoursGroup,
        repeatIn12HoursGroup,
        repeatIn24HoursGroup,
        repeatIn3DaysGroup
    ];

    return {filtersOfCollection,orgonizedGroupsOfCollection};
};