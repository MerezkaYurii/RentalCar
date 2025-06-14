import React from 'react';
import s from './CarItem.module.css';
export const CarItem = ({
  img,
  brand,
  year,
  model,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const parts = address.split(', ');
  const result = parseInt(mileage * 1.61);
  const str = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  return (
    <div className={s.container}>
      <div className={s.infoCar}>
        <div className={s.image}>
          <img src={img} alt="car" />
        </div>

        <div className={s.titleContainer}>
          <p className={s.titleLeft}>
            {brand}
            <span> {model}</span>, {year}
          </p>
          <p className={s.titleRight}>${rentalPrice}</p>
        </div>
        <p className={s.text}>
          {parts[1]} | {parts[2]} | {rentalCompany} |
        </p>
        <p className={s.text}>
          {str} | {result}km
        </p>
      </div>

      <button className={s.btn}> Read more</button>
    </div>
  );
};
