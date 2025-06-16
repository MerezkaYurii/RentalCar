import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './carsOps';

const initialState = {
  cars: [],
  brands: [],
  filters: {},
  isLoading: false,
  isError: false,
  page: 1,
  totalPages: 1,
  totalCars: 0,
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalCars, totalPages, page } = action.payload;

        if (Number(page) === 1) {
          state.cars = cars;
        } else {
          state.cars = [...state.cars, ...cars];
        }

        state.page = Number(page);
        state.totalPages = totalPages;
        state.totalCars = totalCars;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const carReduser = slice.reducer;
export const { setFilters } = slice.actions;
