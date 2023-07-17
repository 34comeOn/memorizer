import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import accountSlice from './reducers/accountReducer';
import editSlice from './reducers/editReducer';
import collectionFiltersSlice from './reducers/collectionFiltersReducer';
import collectionGroupsSlice from './reducers/collectionGroupsReducer';
import cardWindowSlice from './reducers/cardWindowReducer';
import modalWindowSlice from './reducers/modalWindowReducer';
import userCollectionsSlice from './reducers/userCollectionsReducer';
import utillsSlice from './reducers/utillsReducer';
import { rootAPI } from '../RTKApi/rootApi';

const rootReducer = combineReducers({
  accountSlice,
  editSlice,
  collectionFiltersSlice,
  collectionGroupsSlice,
  cardWindowSlice,
  modalWindowSlice,
  userCollectionsSlice,
  utillsSlice,
  [rootAPI.reducerPath]: rootAPI.reducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([rootAPI.middleware])
  });

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
