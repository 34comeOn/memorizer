import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import filterCheckboxSlice from './reducers/checkboxReduser';
import collectionGroupsSlice from './reducers/collectionGroupsReduser';
import { rootAPI } from '../RTKApi/rootApi';

const rootReducer = combineReducers({
  filterCheckboxSlice,
  collectionGroupsSlice,
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
