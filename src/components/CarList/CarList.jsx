import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from '../../redux/carsSelectors';
import { CarItem } from '../CarItem/CarItem';
import s from './CarList.module.css';

export const CarList = () => {
  const cars = useSelector(selectCars);

  return (
    <ul className={s.wrapper}>
      {cars.map(car => (
        <CarItem {...car} key={car.id} />
      ))}
    </ul>
  );
};
