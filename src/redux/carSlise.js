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
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    addFavorite(state, action) {
      const exists = state.favorites.find(car => car.id === action.payload.id);
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload
      );
    },
    loadFavorites(state, action) {
      state.favorites = action.payload;
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
export const { setFilters, addFavorite, removeFavorite, loadFavorites } =
  slice.actions;
