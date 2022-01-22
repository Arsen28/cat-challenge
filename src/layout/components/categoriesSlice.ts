import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCategories } from './categoriesAPI';

export interface CategoriesState {
  value: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CategoriesState = {
  value: [],
  status: 'idle',
};

export const getCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = state.value.concat(action.payload);
      });
  },
});

export const selectCategories = (state: RootState) => state.categories.value;

export default categoriesSlice.reducer;
