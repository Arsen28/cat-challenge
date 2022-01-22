import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import catsReducer from '../features/cats/catsSlice';
import categoriesReducer from '../layout/components/categoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cats: catsReducer,
    categories: categoriesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
