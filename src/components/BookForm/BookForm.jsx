import React from 'react';
import s from './BookForm.module.css';
import { Field, Form, Formik } from 'formik';

export const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Book your car now</h1>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <div>
        <Formik initialValues={initialValues}>
          <Form>
            <Field className={s.input} name="name" placeholder="Name" />
            <Field
              className={s.input}
              name="email"
              placeholder="Email"
              type="email"
            />
            <Field
              className={s.input}
              name="bookingDate"
              placeholder="Booking date"
            />
            <Field
              as="textarea"
              className={s.comment}
              name="comment"
              placeholder="Comment"
            />
          </Form>
        </Formik>
        <button className={s.btn}>Send</button>
      </div>
    </div>
  );
};
