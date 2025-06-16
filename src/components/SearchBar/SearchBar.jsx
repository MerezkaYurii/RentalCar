import React from 'react';
import s from './SearchBar.module.css';
import { Field, Formik, Form, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars } from '../../redux/carsSelectors';
import { fetchCars } from '../../redux/carsOps';
import { setFilters } from '../../redux/carSlise';

const FormattedInput = ({ name, className }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = e => {
    const raw = e.target.value.replace(/\D/g, '');
    const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    setFieldValue(name, formatted);
  };

  return (
    <input className={className} value={values[name]} onChange={handleChange} />
  );
};

export const SearchBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const initialValues = {
    brand: '',
    rentalPrice: '',
    from: '',
    to: '',
  };
  const handleSubmit = async (values, actions) => {
    const cleanedValues = {
      ...values,
      from: values.from.replace(/\s/g, ''),
      to: values.to.replace(/\s/g, ''),
    };
    const singleFilter = {};
    if (cleanedValues.brand) singleFilter.brand = cleanedValues.brand;
    if (cleanedValues.rentalPrice)
      singleFilter.rentalPrice = cleanedValues.rentalPrice;
    if (cleanedValues.from) singleFilter.from = cleanedValues.from;
    if (cleanedValues.to) singleFilter.to = cleanedValues.to;

    dispatch(setFilters(singleFilter));
    dispatch(fetchCars({ page: 1, filters: singleFilter }));
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.label}>
            <label name="brand">Car brand</label>
            <Field as="select" name="brand" className={s.field}>
              <option value="">Choose a brand</option>
              {[...new Set(cars.map(car => car.brand))].sort().map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </div>

          <div className={s.label}>
            <label name="rentalPrice">Price/ 1 hour</label>
            <Field as="select" name="rentalPrice" className={s.field}>
              <option value="">Choose a price </option>
              {[...new Set(cars.map(item => item.rentalPrice))]
                .sort((a, b) => parseFloat(a) - parseFloat(b))
                .map(rentalPrice => (
                  <option key={rentalPrice} value={rentalPrice}>
                    {rentalPrice}
                  </option>
                ))}
            </Field>
          </div>

          <div className={s.label}>
            <label name="from">Сar mileage / km</label>
            <div className={s.rangeGroup}>
              <div className={s.rangeInput}>
                <span className={s.fakePlaceholder}>From</span>
                <Field
                  name="from"
                  component={() => (
                    <FormattedInput name="from" className={s.from} />
                  )}
                />
              </div>

              <div className={s.rangeInput}>
                <span className={s.fakePlaceholder}>To</span>
                <Field
                  name="to"
                  component={() => (
                    <FormattedInput name="to" className={s.to} />
                  )}
                />
              </div>
            </div>
          </div>

          <button className={s.button}>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
