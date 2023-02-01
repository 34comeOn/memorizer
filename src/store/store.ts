import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import filterCheckboxSlice from './reducers/checkboxReduser';

const rootReducer = combineReducers({
  filterCheckboxSlice
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
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
