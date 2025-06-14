import { configureStore } from '@reduxjs/toolkit';
import { carReduser } from './carSlise';

export const store = configureStore({
  reducer: {
    cars: carReduser,
  },
});
