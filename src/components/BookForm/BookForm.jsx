import React from 'react';
import s from './BookForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
export const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, actions) => {
    toast.success('Booking submitted successfully!');
    actions.resetForm();
  };

  const BookFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    bookingDate: Yup.string()
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[0-2])\.(19|20)\d{2}$/,
        'Date must be in format DD.MM.YYYY'
      )
      .required('Required'),
    comment: Yup.string().min(3, 'Too short').max(256, 'Too long'),
  });
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Book your car now</h1>
      <p className={s.text}>Stay connected! We are always ready to help you.</p>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={BookFormSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field className={s.input} name="name" placeholder="Name" />
            <ErrorMessage name="name" component="p" className={s.error} />
            <Field
              className={s.input}
              name="email"
              placeholder="Email"
              type="email"
            />

            <ErrorMessage name="email" component="p" className={s.error} />
            <Field
              className={s.input}
              name="bookingDate"
              placeholder="Booking date"
            />
            <ErrorMessage
              name="bookingDate"
              component="p"
              className={s.error}
            />
            <Field
              as="textarea"
              className={s.comment}
              name="comment"
              placeholder="Comment"
            />
            <button className={s.btn} type="submit">
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
