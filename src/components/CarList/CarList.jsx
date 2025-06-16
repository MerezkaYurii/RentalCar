import React from 'react';

import { CarItem } from '../CarItem/CarItem';
import s from './CarList.module.css';

export const CarList = ({ cars }) => {
  return (
    <ul className={s.wrapper}>
      {cars.map(car => (
        <CarItem {...car} key={car.id} />
      ))}
    </ul>
  );
};
