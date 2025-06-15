import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/carsOps';
import { CarList } from '../../components/CarList/CarList';
import { useDispatch } from 'react-redux';
import s from './Catalog.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(fetchCars({ page })).unwrap();
      setCars(data);
    };
    getData();
  }, [dispatch, page]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className={s.container}>
        <CarList />
      </div>
      <button className={s.button} onClick={() => setPage(prev => prev + 1)}>
        Load more
      </button>
    </>
  );
};

export default Catalog;
