import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const fetchCars = createAsyncThunk(
  'cars/fetchData',
  async ({ page, filters = {} }, thunkAPI) => {
    try {
      const queryParams = {
        page,
        brand: filters.brand || '',
        rentalPrice: filters.rentalPrice || '',
        from: filters.from || '',
        to: filters.to || '',
      };

      const params = new URLSearchParams(queryParams).toString();
      const { data } = await api.get(`/cars?${params}`);
      console.log(data);
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
