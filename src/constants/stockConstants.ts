import { ThunkDispatch, CombinedState, AnyAction, Dispatch } from "@reduxjs/toolkit";
import { CombinedState as CombinedStateApi } from "@reduxjs/toolkit/dist/query/core/apiState";
import { TgroupForRepeat } from "../store/reducers/collectionGroupsReduser";
import { Tcard } from "../utils/utils";
import { nanoid } from 'nanoid';

type TRepeatTimesConvertToPoints = {
  [key: number]: number,
}

export type Tdispatch = ThunkDispatch<CombinedState<{ accountSlice: { isAuthorized: boolean; accountUserName: string; userEmail: string; }; collectionFiltersSlice: { filtersList: string[]; listOfCurrentFilters: string[]; }; collectionGroupsSlice: { repeatGroups: TgroupForRepeat[]; }; cardWindowSlice: { currentCard: Tcard; isCurrentCardVisible: boolean; isAnswerVisible: boolean; }; userCollectionsSlice: { allUserCollections: { _id: string; title: string; data: Tcard[]; }[]; }; rootAPI: CombinedStateApi<{}, never, "rootAPI">; }>, undefined, AnyAction> & Dispatch<AnyAction>

export const REPEAT_TIMES_CONVERT_TO_POINTS: TRepeatTimesConvertToPoints = {
  0: 0,
  1: 1,
  2: 4,
  3: 8,
  4: 12,
  5: 24,
  6: 72,
}

export const STOCK_COLLECTION_COLOR = '#0052C1';

export const MAX_PUNISHMENT_FOR_LATE_PRACTICE = 3;

export const STOCK_COLLECTION_ITEM = {
  '_id': nanoid(),   
  repeatedTimeStamp: 1671420000000,
  timesBeenRepeated: 0,
  title: 'Test',
  answer: 'Answer',
}


export const STOCK_COLLECTION = {
  '_id': nanoid(),
  color:'',
  title: 'Train stock React collection',
  data: [STOCK_COLLECTION_ITEM],
  adminList: [],
}

export const STOCK_COLLECTIONS_DATA = [
  STOCK_COLLECTION
]
export const STOCK_USER = {
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