import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/carsOps';
import { CarList } from '../../components/CarList/CarList';
import { useDispatch } from 'react-redux';
import s from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(fetchCars()).unwrap();
      setCars(data);
    };
    getData();
  }, [dispatch]);

  return (
    <>
      {/* <div>
        <SearchBar />
      </div> */}
      <div className={s.container}>
        <CarList />
      </div>
    </>
  );
};

export default Catalog;
