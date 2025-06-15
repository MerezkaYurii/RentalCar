import React from 'react';
import s from './Details.module.css';

export const Details = ({ car }) => {
  const {
    brand,
    model,
    description,
    year,
    rentalPrice,
    img,
    address,
    mileage,
    rentalConditions,
    functionalities,
    accessories,
    type,
    fuelConsumption,
    engineSize,
  } = car;

  const filename = img.split('/').pop();
  const number = filename.split('-')[0];

  const parts = address.split(', ');
  const str = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  return (
    <div className={s.container}>
      <div>
        <h2 className={s.carname}>
          {brand} {model}, {year} <span className={s.id}> Id:{number}</span>
        </h2>
        <p className={s.text}>
          <svg className={s.icon}>
            <use xlinkHref="/sprite.svg#icon-ocation" />
          </svg>
          {parts[1]}, {parts[2]} <span>Mileage:{mileage}ml </span>
        </p>
        <h2 className={s.carprice}>${rentalPrice}</h2>
        <p className={s.textdescription}>{description}</p>
      </div>
      <div>
        <h2 className={s.rentalConditions}>Rental Conditions:</h2>
        {rentalConditions.map(item => {
          return (
            <p className={s.textrentalConditions}>
              <svg className={s.iconCheck}>
                <use xlinkHref="/sprite.svg#icon-Check" />
              </svg>
              {item}
            </p>
          );
        })}
      </div>

      <div>
        <h2 className={s.rentalConditions}>Car Specifications:</h2>
        <p className={s.text}>
          <svg className={s.iconCheck}>
            <use xlinkHref="/sprite.svg#icon-Table" />
          </svg>
          Year: {year}
        </p>
        <p className={s.text}>
          <svg className={s.iconCheck}>
            <use xlinkHref="/sprite.svg#icon-Car" />
          </svg>
          Type: {str}
        </p>
        <p className={s.text}>
          <svg className={s.iconCheck}>
            <use xlinkHref="/sprite.svg#icon-Fuil" />
          </svg>
          Fuel Consumption: {fuelConsumption}
        </p>
        <p className={s.text}>
          <svg className={s.iconCheck}>
            <use xlinkHref="/sprite.svg#icon-Setting" />
          </svg>
          Engine Size: {engineSize}
        </p>
      </div>

      <div className={s.cont4}>
        <h2 className={s.rentalConditions}>Accessories and functionalities:</h2>
        {accessories.map(item => {
          return (
            <p className={s.textrentalConditions}>
              <svg className={s.iconCheck}>
                <use xlinkHref="/sprite.svg#icon-Check" />
              </svg>
              {item}
            </p>
          );
        })}
        {functionalities.map(item => {
          return (
            <p className={s.textrentalConditions}>
              <svg className={s.iconCheck}>
                <use xlinkHref="/sprite.svg#icon-Check" />
              </svg>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
