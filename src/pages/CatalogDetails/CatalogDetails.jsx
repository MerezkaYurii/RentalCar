import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/carsOps';
import { useDispatch } from 'react-redux';
import s from './CatalogDetails.module.css';
import { BookForm } from '../../components/BookForm/BookForm';
import { Details } from '../../components/Details/Details';
import Loader from '../../components/Loader';

const CatalogDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(fetchCarById(id)).unwrap();
      setCar(data);
    };
    getData();
  }, [dispatch, id]);

  if (!car) {
    return <Loader />;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.details}>
        <Details car={car} />
      </div>
      <div className={s.image}>
        <img src={car.img} alt="car" />
      </div>
      <BookForm />
    </div>
  );
};

export default CatalogDetails;
