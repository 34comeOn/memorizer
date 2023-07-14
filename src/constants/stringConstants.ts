export const MAIN_FILTER_CHECKBOX = 'all';

export const GET_DATA_ENDPOINT = '/data';
export const GET_CURRENT_COLLECTION_ENDPOINT = '/traing-collection';
export const SIGN_IN_USER_ENDPOINT = 'api/sign-in';
export const SIGN_UP_USER_ENDPOINT = 'api/sign-up';
export const CREATE_NEW_COLLECTION_ENDPOINT = 'api/new-collection';
export const EDIT_COLLECTION_ENDPOINT = 'api/edit-collection';
export const CREATE_NEW_CARD_ENDPOINT = 'api/new-card';
export const EDIT_CARD_ENDPOINT = 'api/edit-card';
export const PUT_REPEATED_COLLECTION_ITEM_ENDPOINT = 'api/repeat';

export const LOCAL_STORAGE_KEYS_CONSTANTS = {
    HAS_USER_ACCESS: 'hasAccess',
    ACCOUNT_USER_NAME: 'userName',
    USER_EMAIL: 'userEmail',
    USER_ID: 'userId',
    USER_COLLECTIONS: 'userCollections',
    CURRENT_USER_COLLECTION: 'currentUserCollection',
    USER_REPEAT_GROUPS: 'userRepeatGroups',
    USER_BASIC_COLLECTIONS_INFO: 'userBasicCollectionsInfo',
    FILTERS_LIST: 'filtersList',
}

export const MODAL_WINDOW_CONTENT_STRING_CONSTANTS = {
    CREATE_NEW_COLLECTION: 'newCollection',
    EDIT_COLLECTION: 'editCollection',
    CREATE_NEW_CARD: 'newCard',
    EDIT_CARD: 'editCard',
    RENDER_ITEM_OF_COLLECTION: 'renderCollectionItem',
}

export const ROUTS_CONSTANTS = {
    MAIN_PAGE: '/',
    CURRENT_COLLECTION_PAGE: 'collection',
    SIGN_IN_AND_UP_PAGE: 'sign_in&up',
    FORGOT_PASSWORD_PAGE: 'forgot_password',
}

export const RADIO_BUTTON_NAME = {
    NO_CATEGORY: 'doNotPickCategory',
    SET_CATEGORY: 'createAndSetCategory',
    CHOOSE_CATEGORY: 'chooseFromExistingCategory',
}

export const RADIO_BUTTON_LABEL_TEXT = {
    NO_CATEGORY: 'Do not want to create category',
    SET_CATEGORY: 'Create new category',
    CHOOSE_CATEGORY: 'Choose from categories',
}

export const REPEAT_LISTS_TITLE = [
    'Repeat now',
    'Repeat in 1 hour',
    'Repeat in 4 hours',
    'Repeat in 8 hours',
    'Repeat in 12 hours',
    'Repeat in 24 hours',
    'Repeat in 3 days',
]

export const UNPUNISHABLE_REPEAT_TIMES = 3;

export const FORGOT_PASSWORD_LINK = 'Forgot password?';
export const FORGOT_PASSWORD_TEXT = 'If you do not remember password, we would send new password to your e-mail';
