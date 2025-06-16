import React from 'react';
import { useSelector } from 'react-redux';
import { CarItem } from '../CarItem/CarItem';

export const FavoritesList = () => {
  const favorites = useSelector(state => state.cars.favorites);

  if (favorites.length === 0) {
    return <p>Нет избранных автомобилей</p>;
  }

  return (
    <ul>
      {favorites.map(car => (
        <CarItem key={car.id} {...car} />
      ))}
    </ul>
  );
};
