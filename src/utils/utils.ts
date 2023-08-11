import { PERIODS_OF_PRACRICE, REPEAT_TIMES_CONVERT_TO_POINTS, STOCK_USER } from "../constants/stockConstants";
import { HIGHEST_REPEAT_TIMES, LOCAL_STORAGE_KEYS_CONSTANTS, RADIO_BUTTON_NAME, UNPUNISHABLE_REPEAT_TIMES } from "../constants/stringConstants";
import { FIELD_REQUIRED_WARNING, MAX_LENGTH_TITLE, MAX_LENGTH_TITLE_WARNING, TITLE_REGEX, TITLE_REGEX_WARNING } from "../constants/validationConstants";
import { InewCardForm } from "../myHooks/collectionHooks/useCreateNewCard";
import { getItemPoints } from "./getItemPoints";
import variables from '../sass/variables.module.scss';

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
    collectionItemPenaltyCount: number,
    collectionItemInvincibleCount: number,
    collectionItemCategory?: string,
    collectionItemColor?: string,
    collectionItemPriority?: number,
    collectionItemTags?: string | TcollectionTag[],
    collectionItemComments?: TcollectionItemComment[],
}



export type TstockCollectionItemData = Omit<TcollectionItemData, 
    'collectionItemTitle' | 
    'collectionItemAnswer' | 
    'collectionItemPenaltyCount' | 
    'collectionItemInvincibleCount' 
>

export type TeditCollectionItemData = Omit<TcollectionItemData, 
    'collectionItemRepeatedTimeStamp' | 
    'collectionItemTimesBeenRepeated' |
    'collectionItemPenaltyCount' |
    'collectionItemInvincibleCount' 
>

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

    if (itemPoints <= PERIODS_OF_PRACRICE.NO_PRACTICE) {
        repeatNowGroup.push(item)
    } else if (itemPoints <= PERIODS_OF_PRACRICE.FIRST_PRACRICE) {
        repeatIn1HourGroup.push(item)
    } else if (itemPoints <= PERIODS_OF_PRACRICE.SECOND_PRACRICE) {
        repeatIn4HoursGroup.push(item)
    } else if (itemPoints <= PERIODS_OF_PRACRICE.THIRD_PRACRICE) {
        repeatIn8HoursGroup.push(item)
    } else if (itemPoints <= PERIODS_OF_PRACRICE.FOURTH_PRACRICE) {
        repeatIn12HoursGroup.push(item)
    } else if (itemPoints <= PERIODS_OF_PRACRICE.FIFTH_PRACRICE) {
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

export const updateTimesBeenRepeated = (currentTimesBeenRepeated: number) => {
    const HighestTimesBeenRepeatedNumber = Object.keys(REPEAT_TIMES_CONVERT_TO_POINTS).length-1;
    return currentTimesBeenRepeated >= HighestTimesBeenRepeatedNumber? HighestTimesBeenRepeatedNumber: currentTimesBeenRepeated + 1;
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
    newCard: TeditCollectionItemData,
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

export const addOverlay = (currentCollection: TuserCollectionData) => {
    const collectionDataOverlay = JSON.parse(localStorage.getItem(currentCollection._id?? '')?? JSON.stringify([]));
    const collectionData = currentCollection.collectionData;
    let newCollectionData: TcollectionItemData[] = [];

    if (collectionDataOverlay.length > 0) {
        newCollectionData = collectionData.map(card => {
            const itemOverlay = collectionDataOverlay.find((item: TstockCollectionItemData) => item._id === card._id);
            if (itemOverlay) {
                return {...card, 
                    collectionItemRepeatedTimeStamp: itemOverlay.collectionItemRepeatedTimeStamp,
                    collectionItemTimesBeenRepeated: itemOverlay.collectionItemTimesBeenRepeated
                }
            }
            return card
        })

        return {...currentCollection, collectionData: newCollectionData};
    }

    return currentCollection;
}

export const makeOverlayProgress = (currentCollectionId: string, currentCardId: string) => {
    const collectionDataOverlay = JSON.parse(localStorage.getItem(currentCollectionId)?? JSON.stringify([]));
    const newItemOverlay = {
        '_id': currentCardId,
        collectionItemRepeatedTimeStamp: Date.now(),
        collectionItemTimesBeenRepeated: 1,
    }

    const itemOverlay = collectionDataOverlay.find((item: TcollectionItemData) => item._id === currentCardId);

    if (itemOverlay) {
        itemOverlay.collectionItemRepeatedTimeStamp = Date.now();
        itemOverlay.collectionItemTimesBeenRepeated = updateTimesBeenRepeated(itemOverlay.collectionItemTimesBeenRepeated);

        localStorage.setItem(currentCollectionId, JSON.stringify(collectionDataOverlay))
    } else {
        localStorage.setItem(currentCollectionId, JSON.stringify([...collectionDataOverlay, newItemOverlay]));
    }
}
