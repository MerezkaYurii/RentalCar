import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOps';

const initialState = {
  cars: [],
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const carReduser = slice.reducer;
