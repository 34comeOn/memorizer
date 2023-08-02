import { MAX_PUNISHMENT_FOR_LATE_PRACTICE, PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS, REPEAT_TIMES_CONVERT_TO_POINTS, STOCK_USER } from "../constants/stockConstants";
import { HIGHEST_REPEAT_TIMES, LOCAL_STORAGE_KEYS_CONSTANTS, RADIO_BUTTON_NAME, UNPUNISHABLE_REPEAT_TIMES } from "../constants/stringConstants";
import { FIELD_REQUIRED_WARNING, MAX_LENGTH_TITLE, MAX_LENGTH_TITLE_WARNING, TITLE_REGEX, TITLE_REGEX_WARNING } from "../constants/validationConstants";
import { InewCardForm } from "../myHooks/collectionHooks/useCreateNewCard";
import { IsignInForm } from "../myHooks/myFormHooks/useSubmitButtonForSignUp";
import variables from '../sass/variables.module.scss';
import { countItemPoints } from "./countItemPoints";
import { getHoursSinceRepeat } from "./getHoursSinceRepeat";
import { getItemPoints } from "./getItemPoints";

export type TbasicCollectionInfo = {
    '_id'?: string,
    collectionColor: string,
    collectionImage?: string,
    collectionTitle: string,
    collectionAdminList: string[],
}

export type TcollectionItemComment = {
    collectionItemCommentText?: string,
    collectionItemCommentImage?: string,
    collectionItemCommentPosition?: number,
}

export type TcollectionItemData = {
    '_id'?: string,
    collectionItemTitle: string,
    collectionItemAnswer: string,
    collectionItemRepeatedTimeStamp: number,
    collectionItemTimesBeenRepeated: number,
    collectionItemCategory?: string,
    collectionItemColor?: string,
    collectionItemPriority?: number,
    collectionItemTags?: string | TcollectionTag[],
    collectionItemComments?: TcollectionItemComment[],
}

export type TcollectionTag = {
    label: string,
    value: string,
}
export type TcollectionСategory = {
    label: string,
    value: string,
    collectionCategoryColor: string,
}

export type TuserCollectionData = {
    '_id'?: string,
    collectionColor: string,
    collectionImage: string,
    collectionTitle: string,
    collectionAdminList: string[],
    collectionСategories?: TcollectionСategory[],
    collectionTags?: TcollectionTag[],
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
    userCollectionsData: TuserCollectionData[],
}

const pullFiltersTitlesFromData = (item: TcollectionItemData,filtersArray: string[]) => {
    if (item.collectionItemCategory && !filtersArray.includes(item.collectionItemCategory)) {
        filtersArray.push(item.collectionItemCategory)
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
    
    const itemPoints = getItemPoints(item.collectionItemRepeatedTimeStamp, item.collectionItemTimesBeenRepeated)

    if (itemPoints <= 0) {
        repeatNowGroup.push(item)
    } else if (itemPoints <= 1) {
        repeatIn1HourGroup.push(item)
    } else if (itemPoints <= 4) {
        repeatIn4HoursGroup.push(item)
    } else if (itemPoints <= 8) {
        repeatIn8HoursGroup.push(item)
    } else if (itemPoints <= 12) {
        repeatIn12HoursGroup.push(item)
    } else if (itemPoints <= 24) {
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

export const countPunishmentPoints = (timesBeenRepeated: number, lastTimeRepeted: number) => {
    let punishPoints = 0;
    for (let i = 0; i <= MAX_PUNISHMENT_FOR_LATE_PRACTICE; i++) {
        if ((getHoursSinceRepeat(lastTimeRepeted) - (PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS[timesBeenRepeated - i]?? 0)) >= 1) {
            console.log(PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS[timesBeenRepeated - i]?? 0)
            punishPoints += 1;
        } 
    }
    return punishPoints;
}

export const getPunishmentForLatePractice = (timesBeenRepeated: number, lastTimeRepeted: number) => {
    const newTimesBeenRepeated = timesBeenRepeated - countPunishmentPoints(timesBeenRepeated, lastTimeRepeted);
    if (timesBeenRepeated >= UNPUNISHABLE_REPEAT_TIMES) {
        return (newTimesBeenRepeated <= UNPUNISHABLE_REPEAT_TIMES? UNPUNISHABLE_REPEAT_TIMES: newTimesBeenRepeated); 
    }

    return (newTimesBeenRepeated <= 0? 0: newTimesBeenRepeated);
}

export const updateTimesBeenRepeated = (currentTimesBeenRepeated: number) => {
    const HighestTimesBeenRepeatedNumber = Object.keys(REPEAT_TIMES_CONVERT_TO_POINTS).length-1;
    return currentTimesBeenRepeated >= HighestTimesBeenRepeatedNumber? HighestTimesBeenRepeatedNumber: currentTimesBeenRepeated + 1;
}

// type TRepeatTimesConvertToPoints = {
//     [key: number]: number,
//   }

// const convertHoursToSeconds = (hours: number) => {
//     return hours*1000*60*60;
// }

// const PUNISHMENT_REPEAT_POINTS:TRepeatTimesConvertToPoints = {
//     0: 1,
//     1: 2,
//     2: 8,
//     3: 16,
//     4: 30,
//     5: 60,
//     6: 140,
//   }

// export const countCompensationTimeDueToPunishment = (timesBeenRepeated: number, punishPoints: number) => {
//     let payOffTime: number = 0;

//     for (let k = 1; k <= punishPoints; k++) {
//         payOffTime += PUNISHMENT_REPEAT_POINTS[timesBeenRepeated + 1 - k]
//     }

//     return convertHoursToSeconds(payOffTime);
// }

// countCompensationTimeDueToPunishment(2,1)

export const getAllCurrentUserData = (userEmail: string) => {
    return JSON.parse(localStorage.getItem(userEmail)?? JSON.stringify(STOCK_USER));
}

export const getCurrentUserEmailFromLStorage = () => {
    return (localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL)?? JSON.stringify(STOCK_USER.email));
}

export const checkAdminPowers = (userEmail: string, collectionAdminList : string[]) => {
    return collectionAdminList.includes(userEmail);
}

export const findCurrentUserCollection = (collectionId: string, userCollectionsData: TuserCollectionData[]) => {
    return userCollectionsData.find((item: TuserCollectionData) => item._id === collectionId);
}

export const cutBasicUserCollectionsInfo = (allUserCollections: TuserCollectionData[]) => {
    const basicCollectionsInfo: TbasicCollectionInfo[] = allUserCollections.map(collection => {
        return ({
            '_id': collection._id,
            collectionColor: collection.collectionColor,
            collectionImage: collection.collectionColor,
            collectionTitle: collection.collectionTitle,
            collectionAdminList: collection.collectionAdminList,
        })
    });

    return basicCollectionsInfo;
}

export const setCategoryInCardObj = (
    newCard: TcollectionItemData,
    values: InewCardForm, 
    currentCollectionCategories: TcollectionСategory[] | undefined) => {
    if (values.categoryRadioButtons === RADIO_BUTTON_NAME.SET_CATEGORY) {

        newCard.collectionItemCategory = values.collectionItemCategory;
        newCard.collectionItemColor = values.collectionItemColor;

    } else if (values.categoryRadioButtons === RADIO_BUTTON_NAME.CHOOSE_CATEGORY) {
        const currentChoosenCategory = currentCollectionCategories?.find(item => item.value === values.cardSelectInput);

        newCard.collectionItemCategory = values.cardSelectInput;
        newCard.collectionItemColor = currentChoosenCategory?.collectionCategoryColor || '';
    }
}

export const checkTitleExclusivity = (
    values: InewCardForm, 
    currentCollectionCategories: TcollectionСategory[] | undefined
) => {
    if (currentCollectionCategories?.find(item => item.value === values.collectionItemCategory)) {
        alert('Such title already exists. Please cum up with new one.');
        return false
    }
    return true
}

export const cutTitle = (title: string, maxLength: number) => {
    return (title.length <= maxLength)? title: `${title.slice(0, maxLength)}...`;
}

export const validateCollectionItemCategory = (value: string) => {
    let error = '';
    if (!value) {
      error = FIELD_REQUIRED_WARNING;
    } else if (!TITLE_REGEX.test(value)) {
      error = TITLE_REGEX_WARNING;
    }
      else if (value.length > MAX_LENGTH_TITLE) {
      error = MAX_LENGTH_TITLE_WARNING;
    }

    return error;
}

export const deliverBackgroundColorForContainer = (timesBeenRepeated: number) => {
    if (timesBeenRepeated < UNPUNISHABLE_REPEAT_TIMES) {
        return variables.colorLowRepeatLevel;
    } else if (timesBeenRepeated < HIGHEST_REPEAT_TIMES - 1) {
        return variables.colorMiddleRepeatLevel;
    } else if (timesBeenRepeated >= HIGHEST_REPEAT_TIMES - 1) {
        return variables.colorHighRepeatLevel;
    }
}
