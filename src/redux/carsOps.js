import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchCars = createAsyncThunk(
  'cars/fetchData',
  async ({ page, filters = {} }, thunkAPI) => {
    try {
      const queryParams = { page };

      if (filters.brand) queryParams.brand = filters.brand;
      if (filters.rentalPrice) queryParams.rentalPrice = filters.rentalPrice;
      if (filters.from) queryParams.from = filters.from;
      if (filters.to) queryParams.to = filters.to;

      const params = new URLSearchParams(queryParams).toString();
      const { data } = await api.get(`/cars?${params}`);
      return {
        cars: data.cars,
        totalCars: data.totalCars,
        totalPages: data.totalPages,
        page: data.page,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchDataById',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.get(`/cars/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
