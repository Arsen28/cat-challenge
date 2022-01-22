import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCats } from './catsAPI';

export interface CatsState {
  value: any[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CatsState = {
  value: [],
  status: 'idle',
};

export interface CatsInfo {
  page: number;
  limit: number;
  category_id: number;
}

export const getCats = createAsyncThunk(
  'cats/fetchCats',
  async (info: CatsInfo) => {
    const response = await fetchCats(info.limit, info.page, info.category_id);
    return response.data;
  }
);

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCats.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = state.value.concat(action.payload);
      });
  },
});

export const selectCats = (state: RootState) => state.cats.value;

export default catsSlice.reducer;
