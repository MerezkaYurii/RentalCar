import { configureStore } from '@reduxjs/toolkit';
import { carReduser } from './carSlise';

export const store = configureStore({
  reducer: {
    cars: carReduser,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('favorites', JSON.stringify(state.cars.favorites));
});
