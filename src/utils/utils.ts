import { MAX_PUNISHMENT_FOR_LATE_PRACTICE, REPEAT_TIMES_CONVERT_TO_POINTS, STOCK_USER } from "../constants/stockConstants";
import { LOCAL_STORAGE_KEYS_CONSTANTS } from "../constants/stringConstants";
import { IsignInForm } from "../myHooks/myFormHooks/useSubmitButtonForSignUp";
// import { TuserCollection } from "../store/reducers/userCollectionsReduser";

// export type Tcard = {
//    ['_id']: string,   
//     repeatedTimeStamp: number | null,
//     timesBeenRepeated: number,
//     title: string,
//     answer: string,
//     code?: string,
//     filterTitle?: string,
//     filterColor?: string,
// }

export type TcollectionItemComment = {
    collectionItemCommentText?: string,
    collectionItemCommentImage?: string,
    collectionItemCommentPosition?: number,
}

export type TcollectionItemData = {
    collectionItemId: string
    collectionItemTitle: string,
    collectionItemAnswer: string,
    collectionItemRepeatedTimeStamp: number,
    collectionItemTimesBeenRepeated: number,
    collectionItemCategory?: string,
    collectionItemColor?: string,
    collectionItemPriority?: number,
    collectionItemTags?: string[],
    collectionItemComments?: TcollectionItemComment[],
}

export type TcollectionTags = {
    collectionTagTitle: string,
    collectionTagColor: string,
}

export type TcollectionСategories = {
    collectionCategoryTitle: string,
    collectionCategoryColor: string,
}

export type TuserCollectionsData = {
    collectionId: string,
    collectionColor: string,
    collectionImage: string,
    collectionTitle: string,
    collectionAdminList: string[],
    collectionСategories?: TcollectionСategories[],
    collectionTags?: TcollectionTags[],
    collectionData: TcollectionItemData[],
}

export type Tuser = {
    '_id'?: string,
    email: string,
    password: string,
    userName: string,
    subscription: string,
    currentToken: string,
    currentCollection: string,
    userCollectionsData: TuserCollectionsData[],
}

const getHoursSinceRepeat = (repeatedTimeStamp: number) => {
    const timeSinceRepeat = Date.now() - repeatedTimeStamp;
    return Math.floor(timeSinceRepeat/ (1000*60*60));
}

const countItemPoints = (repeatPoints: number, hours: number) => repeatPoints - hours;

const getItemPoints = (item: TcollectionItemData) => {
  const itemHours: number = getHoursSinceRepeat(item.collectionItemRepeatedTimeStamp ?? 0)
  return countItemPoints(REPEAT_TIMES_CONVERT_TO_POINTS[item.collectionItemTimesBeenRepeated], itemHours)
}

const pullFiltersTitlesFromData = (item: TcollectionItemData,filtersArray: string[]) => {
    if (item.collectionItemCategory && !filtersArray.includes(item.collectionItemCategory.slice(14))) {
        filtersArray.push(item.collectionItemCategory.slice(14))
    }
}

const sortItemInGroup = (item: TcollectionItemData,
    repeatNowGroup: TcollectionItemData[],
    repeatIn1HourGroup: TcollectionItemData[],
    repeatIn4HoursGroup: TcollectionItemData[],
    repeatIn8HoursGroup: TcollectionItemData[],
    repeatIn12HoursGroup: TcollectionItemData[],
    repeatIn24HoursGroup: TcollectionItemData[],
    repeatIn3DaysGroup: TcollectionItemData[],
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

export const spreadCollectionData = (dataBase: TcollectionItemData[]) => {
    const filtersOfCollection: string[] = [];

    const repeatNowGroup: TcollectionItemData[] = [];
    const repeatIn1HourGroup: TcollectionItemData[] = [];
    const repeatIn4HoursGroup: TcollectionItemData[] = [];
    const repeatIn8HoursGroup: TcollectionItemData[] = [];
    const repeatIn12HoursGroup: TcollectionItemData[] = [];
    const repeatIn24HoursGroup: TcollectionItemData[] = [];
    const repeatIn3DaysGroup: TcollectionItemData[] = [];

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

export const getPunishForLatePractice = (item: TcollectionItemData) => {
    let punishPoints = 0;
    
    for (let i = 0; i <= MAX_PUNISHMENT_FOR_LATE_PRACTICE; i++) {
        if ((getHoursSinceRepeat(item.collectionItemRepeatedTimeStamp?? 0) - REPEAT_TIMES_CONVERT_TO_POINTS[item.collectionItemTimesBeenRepeated - i]) >= 0) {
            punishPoints += 1;
        } 
    }

    const newTimesBeenRepeated = item.collectionItemTimesBeenRepeated - punishPoints;
    
    return (newTimesBeenRepeated <= 0? 1: newTimesBeenRepeated);
}

export const maximiseTimesBeenRepeated = (currentTimesBeenRepeated: number) => {
    const HighestTimesBeenRepeatedNumber = Object.keys(REPEAT_TIMES_CONVERT_TO_POINTS).length-1;
    return currentTimesBeenRepeated >= HighestTimesBeenRepeatedNumber? HighestTimesBeenRepeatedNumber: currentTimesBeenRepeated + 1;
}

export const modifyUserSignUpInfoForDataBase = (valuesFromForm: IsignInForm) => {
    return {
        email: valuesFromForm.email,
        password: valuesFromForm.password,
        name: valuesFromForm.userName,
        currentCollection: '',
        userCollectionsData: [], 
    }
}

export const getAllCurrentUserData = (userEmail: string) => {
    return JSON.parse(localStorage.getItem(userEmail)?? JSON.stringify(STOCK_USER));
}

export const getCurrentUserEmailFromLStorage = () => {
    return (localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL)?? JSON.stringify(STOCK_USER.email));
}

export const checkAdminPowers = (userEmail: string, collectionAdminList : string[]) => {
    return collectionAdminList.includes(userEmail);
}

export const findCurrentUserCollection = (collectionId: string, userCollectionsData: TuserCollectionsData[]) => {
    return userCollectionsData.find((item: TuserCollectionsData) => item.collectionId === collectionId);
}

export const setCurrentCollectionToLocalStorage = (collectionId: string, userCollectionsData: TuserCollectionsData[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.CURRENT_USER_COLLECTION, JSON.stringify(findCurrentUserCollection(collectionId, userCollectionsData)));
}
