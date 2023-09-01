export const MAIN_FILTER_CHECKBOX = 'all';

export const GET_STOCK_COLLECTION_ENG_ENDPOINT = 'api/stock-collection-eng';
export const GET_CURRENT_COLLECTION_ENDPOINT = 'api/traing-collection';
export const SIGN_IN_USER_ENDPOINT = 'api/sign-in';
export const SIGN_UP_USER_ENDPOINT = 'api/sign-up';
export const CREATE_NEW_COLLECTION_ENDPOINT = 'api/new-collection';
export const EDIT_COLLECTION_ENDPOINT = 'api/edit-collection';
export const CREATE_NEW_CARD_ENDPOINT = 'api/new-card';
export const EDIT_CARD_ENDPOINT = 'api/edit-card';
export const PUT_REPEATED_COLLECTION_ITEM_ENDPOINT = 'api/repeat';
export const GET_LOGOUT = 'api/logout';

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
export const HIGHEST_REPEAT_TIMES = 6;

export const FORGOT_PASSWORD_LINK = 'Forgot password?';
export const FORGOT_PASSWORD_TEXT = 'If you do not remember password, we would send new password to your e-mail';

export const RESPONSE_ERROR_TITLE = {
    CREATE_NEW_COLLECTION: 'New collection not created.',
    CREATE_NEW_CARD: 'New card not created',
    EDIT: 'Edit failed',
    CHOOSE_COLLECTION: 'Collection not loaded',
    DELETE: 'Delete failed',
    DONE: 'Progress not saved',
    LOGOUT: 'Log out failed',
    SIGN_IN: 'Sign in failed',
    SIGN_UP: 'Sign up failed',
}

// export const RESPONSE_ERROR_TITLE = {
//     CREATE_NEW_COLLECTION: 'Не получилось создать новую коллекцию',
//     CREATE_NEW_CARD: 'Не получилось создать новую карточку',
//     EDIT: 'Изменения не сохранились',
//     CHOOSE_COLLECTION: 'Не удалось загрузить коллекцию',
//     DELETE: 'Не удалось удалить',
//     DONE: 'Не удалось сохранить прогресс',
//     SIGN_IN: 'Вход не выполнен',
//     SIGN_UP: 'Регистрация не выполнена',
// }

// export const RESPONSE_ERROR_TEXT = {
//     SOMETHING_WENT_WRONG: 'Что-то пошло не так...',
//     PASS_OR_EMAIL_NOT_MATCH: 'E-mail или пароль введен не верно',
//     EMAIL_ALREADY_EXIST: 'Пользователь с таким e-mail уже зарегистрирован',
//     STOCK_COLLECTION_HAS_NOT_LOADED: 'Пробная коллекция не загрузилась',
//     ACCOUNT_NOT_ACTIVATED: 'Аккаунт не активирован. Пожалуйста подтвердите свой адрес электронной почты.',
// }

export const RESPONSE_ERROR_TEXT = {
    SOMETHING_WENT_WRONG: 'Something went wrong...',
    PASS_OR_EMAIL_NOT_MATCH: 'E-mail or password doesn`t match.',
    EMAIL_ALREADY_EXIST: 'User with such e-mail already registred',
    ACCOUNT_NOT_ACTIVATED: 'Please verify your e-mail. Account not activated.',
    STOCK_COLLECTION_HAS_NOT_LOADED: 'Stock collection hasn`t loaded',
    AUTHORIZATION_FAILED: 'Authorization went wrong',
}

export const STOCK_DATA_USER_ID = '64e0dee9748fbea4c268073f';