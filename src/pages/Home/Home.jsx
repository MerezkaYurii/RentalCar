import React from 'react';
import s from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <h3 className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </h3>
      </div>
      <button className={s.button} onClick={handleClick}>
        View Catalog
      </button>
    </div>
  );
}
