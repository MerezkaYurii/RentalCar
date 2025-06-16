import React from 'react';
import s from './CarItem.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/carsSelectors';
import { addFavorite, removeFavorite } from '../../redux/carSlise';
export const CarItem = ({
  id,
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
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(car => car.id === id);
  const navigate = useNavigate();
  const parts = address.split(', ');
  const result = parseInt(mileage * 1.61);
  const str = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(
        addFavorite({
          id,
          img,
          brand,
          year,
          model,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        })
      );
    }
  };

  const handleClick = () => {
    navigate(`/catalog/${id}`);
  };
  return (
    <div className={s.container}>
      <div className={s.infoCar}>
        <div className={s.image}>
          <img src={img} alt="car" />
          <svg
            onClick={toggleFavorite}
            width="16"
            height="16"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
              cursor: 'pointer',
            }}
          >
            {isFavorite ? (
              <use href="/sprite.svg#icon-Property-1Default" fill=" #f2f4f7" />
            ) : (
              <use href="/sprite.svg#icon-Property-1Active" fill=" #3470ff" />
            )}
          </svg>
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

      <button className={s.btn} onClick={handleClick}>
        Read more
      </button>
    </div>
  );
};
