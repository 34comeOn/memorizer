import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_KEYS_CONSTANTS } from '../../constants/stringConstants';

type TAccountState = {
  isAuthorized: boolean;
  accountUserName: string;
  userEmail: string;
};

type TlogInAction = {
  accountUserName: string;
  userEmail: string;
}

const hasAccess = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS) === 'true';
};

const getUserName = () => {
  const storageUserName = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME);
  return typeof storageUserName === 'string' ? storageUserName : ' ';
};
const getUserEmail = () => {
  const storageUserEmail = localStorage.getItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL);
  return typeof storageUserEmail === 'string' ? storageUserEmail : ' ';
};

const initialState: TAccountState = {
  isAuthorized: hasAccess(),
  accountUserName: getUserName(),
  userEmail: getUserEmail(),
};

const accountSlice = createSlice({
  name: 'accountState',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<TlogInAction>) {
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS, 'true');
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME, action.payload.accountUserName);
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.USER_EMAIL, action.payload.userEmail);
      state.isAuthorized = hasAccess();
      state.accountUserName = getUserName();
      state.userEmail = getUserEmail();
    },
    logOut(state) {
      localStorage.setItem(LOCAL_STORAGE_KEYS_CONSTANTS.HAS_USER_ACCESS, 'false');
      state.isAuthorized = hasAccess();
      localStorage.removeItem(LOCAL_STORAGE_KEYS_CONSTANTS.ACCOUNT_USER_NAME);
    }
  }
});

export default accountSlice.reducer;

export const { logIn, logOut } = accountSlice.actions;

export const getAccountStatus = (state: { accountSlice: { isAuthorized: boolean } }) =>
  state.accountSlice.isAuthorized;

export const getAccountUserName = (state: { accountSlice: { accountUserName: string } }) =>
  state.accountSlice.accountUserName;