import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/carsOps';
import { CarList } from '../../components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import s from './Catalog.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { selectFilters, selecTotalPages } from '../../redux/carsSelectors';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const carsData = useSelector(state => state.cars);
  const cars = carsData.cars;
  const filters = useSelector(selectFilters);
  const totalPages = useSelector(selecTotalPages);

  useEffect(() => {
    dispatch(fetchCars({ page, filters }));
  }, [dispatch, page, filters]);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filteredCars = cars.filter(car => {
    const mileage = car.mileage;
    const from = Number(filters.from);
    const to = Number(filters.to);

    const meetsFrom = !from || mileage >= from;
    const meetsTo = !to || mileage <= to;

    return meetsFrom && meetsTo;
  });

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className={s.container}>
        <CarList cars={filteredCars} />
      </div>
      {page < totalPages && (
        <button className={s.button} onClick={() => setPage(prev => prev + 1)}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
