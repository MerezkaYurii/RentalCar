import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCarById } from '../../redux/carsOps';
import { useDispatch } from 'react-redux';

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
    return <h2>loading..</h2>;
  }

  return (
    <div>
      CatalogDetails
      <img src={car.img} />
      <h2>{car.brand}</h2>
      <h2>{id}</h2>
    </div>
  );
};

export default CatalogDetails;
