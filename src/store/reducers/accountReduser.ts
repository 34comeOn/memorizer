import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS_CONSTANTS } from '../../constants/stringConstants';

type TAccountState = {
  isAuthorized: boolean;
  userName: string;
  userEmail: string;
  userId: string;
};

type TlogInAction = {
  userName: string;
  userEmail: string;
  userId: string;
}

const hasAccess = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS) === 'true';
};

const getUserNameFromLstorage = () => {
  const storageUserName = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME);
  return typeof storageUserName === 'string' ? storageUserName : ' ';
};
const getUserEmail = () => {
  const storageUserEmail = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL);
  return typeof storageUserEmail === 'string' ? storageUserEmail : ' ';
};

const getUserId = () => {
  const storageUserId = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_ID);
  return typeof storageUserId === 'string' ? storageUserId : ' ';
};

const initialState: TAccountState = {
  isAuthorized: hasAccess(),
  userName: getUserNameFromLstorage(),
  userEmail: getUserEmail(),
  userId: getUserId(),
};

const accountSlice = createSlice({
  name: 'accountState',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<TlogInAction>) {
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS, 'true');
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME, action.payload.userName);
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL, action.payload.userEmail);
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_ID, action.payload.userId);
      state.isAuthorized = hasAccess();
      state.userName = getUserNameFromLstorage();
      state.userEmail = getUserEmail();
    },
    logOut(state) {
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS, 'false');
      localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_COLLECTIONS);
      state.isAuthorized = hasAccess();
      localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME);
    }
  }
});

export default accountSlice.reducer;

export const { logIn, logOut } = accountSlice.actions;

export const getAccountStatus = (state: { accountSlice: { isAuthorized: boolean } }) =>
  state.accountSlice.isAuthorized;

export const getUserName = (state: { accountSlice: { userName: string } }) =>
  state.accountSlice.userName;

export const getUserEmailFromStore = (state: { accountSlice: { userEmail: string } }) =>
  state.accountSlice.userEmail;

export const getUserIdFromStore = (state: { accountSlice: { userId: string } }) =>
  state.accountSlice.userId;