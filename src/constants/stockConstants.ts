import { ThunkDispatch, CombinedState, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { CombinedState as CombinedStateApi } from "@reduxjs/toolkit/dist/query/core/apiState";
import { TgroupForRepeat } from "../store/reducers/collectionGroupsReducer";
import { TcollectionItemData } from "../utils/utils";

type TRepeatTimesConvertToPoints = {
  [key: number]: number,
}

export type Tdispatch = ThunkDispatch<CombinedState<{ accountSlice: { isAuthorized: boolean; userName: string; userEmail: string; }; collectionFiltersSlice: { filtersList: string[]; listOfCurrentFilters: string[]; }; collectionGroupsSlice: { repeatGroups: TgroupForRepeat[]; }; cardWindowSlice: { currentCard: TcollectionItemData; isCurrentCardVisible: boolean; isAnswerVisible: boolean; }; userCollectionsSlice: { allUserCollections: { _id: string; title: string; data: TcollectionItemData[]; }[]; }; rootAPI: CombinedStateApi<{}, never, "rootAPI">; }>, undefined, AnyAction> & Dispatch<AnyAction>

export const REPEAT_TIMES_CONVERT_TO_POINTS: TRepeatTimesConvertToPoints = {
  0: 0,
  1: 1,
  2: 4,
  3: 8,
  4: 12,
  5: 24,
  6: 72,
}

export const PUNISHMENT_REPEAT_TIMES_CONVERT_TO_POINTS: TRepeatTimesConvertToPoints = {
  0: 1,
  1: 2,
  2: 8,
  3: 16,
  4: 30,
  5: 60,
  6: 140,
}

export const AUTO_HIDE_DURATION = {
  PUNISHMENT: 6000,
  PROGRESS: 2000,
};

export const STOCK_COLLECTION_COLOR = '#0052C1';

export const MAX_PUNISHMENT_FOR_LATE_PRACTICE = 2;

export const STOCK_COLLECTION_ITEM = {
  _id: '000',   
  collectionItemTitle: 'Test',
  collectionItemAnswer: 'Answer',
  collectionItemRepeatedTimeStamp: 1671420000000,
  collectionItemTimesBeenRepeated: 0,
  collectionItemCategory: 'stock-item--category',
  collectionItemColor: 'red',
}


export const STOCK_BASIC_COLLECTION_INFO = {
  _id: '000',
  collectionColor: 'black',
  collectionImage: 'none',
  collectionTitle: 'Basic test collection',
}

export const STOCK_COLLECTION = {
  _id: '000',
  collectionColor:'',
  collectionImage: 'none',
  collectionTitle: 'Testing',
  collectionAdminList: [],
  collectionСategories: [],
  collectionTags: [],
  collectionData: [STOCK_COLLECTION_ITEM],
}

export const STOCK_COLLECTION_ITEM_LOCAL_STORAGE = {
  _id: '000',   
  collectionItemTitle: 'What is the biggest lake in Africa?',
  collectionItemAnswer: 'It is...',
  collectionItemRepeatedTimeStamp: 1671420000000,
  collectionItemTimesBeenRepeated: 0,
  collectionItemCategory: 'africa',
  collectionItemColor: 'red',
}


export const STOCK_BASIC_COLLECTION_INFO_LOCAL_STORAGE = {
  _id: '000',
  collectionColor: 'red',
  collectionImage: 'none',
  collectionTitle: 'Geography',
}

export const STOCK_COLLECTION_LOCAL_STORAGE = {
  _id: '000',
  collectionColor:'red',
  collectionImage: 'none',
  collectionTitle: 'Geography',
  collectionAdminList: ['none'],
  collectionСategories: [ {label:'africa', value:'africa',collectionCategoryColor: 'red'}, {label:'europe', value:'europe',collectionCategoryColor: 'green'}],
  collectionTags: [],
  collectionData: [STOCK_COLLECTION_ITEM_LOCAL_STORAGE],
}

export const STOCK_COLLECTIONS_DATA = [
  STOCK_COLLECTION
]
export const STOCK_USER = {
  '_id': 'stockId',
  email: 'testMemUser@gmail.com',
  password: '!testMemUserPass333',
  name: 'Stock User',
  currentCollection: '',
  userCollectionsData: [], 
}

export const STOCK_LOCAL_STORAGE_DATABASE_OBJ = {
  'testLStorageUser@gmail.com': {
    email: 'testLStorageUser@gmail.com',
    password: '!testLStorageUserPass333',
    name: 'Stock User',
    currentCollection: '',
    userCollectionsData: STOCK_COLLECTIONS_DATA, 
  },
}

export type TnavigationItem = {
  title: string,
  path: string,
  loggedStatusDependent: boolean,
  visibleWhenUserLoggedIn?: boolean,
}

export const NAVIGATION_ITEMS: TnavigationItem[] = [
  {
    title: 'Sign in/up',
    path: 'sign_in&up',
    loggedStatusDependent: true,
    visibleWhenUserLoggedIn: false,
  },
  {
    title: 'About',
    path: '',
    loggedStatusDependent: false,
  },
  {
    title: 'Help',
    path: '',
    loggedStatusDependent: false,
  },
  {
    title: 'Contacts',
    path: '',
    loggedStatusDependent: false,
  },
];

export const MAX_REPEATLIST_ITEM_TITLE_LENGTH = 46;