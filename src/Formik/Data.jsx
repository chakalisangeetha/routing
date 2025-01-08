import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Practise = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState('');
  const [autoFill, setAutoFill] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    email: Yup.string()
      .required('email is required')
      .email('invalid email format'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .required('password is required')
      .min(6, 'password must be 6 characters long'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });
  return (
    <>
      practise formic
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form Submitted:', values);

          alert(JSON.stringify(values, null, 2));
          setSuccessMessage('form submitted succussfully');
          resetForm('');
        }}
      >
        {({ dirty, isValid, setFieldValue }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <input
                type="checkbox"
                checked={autoFill}
                onChange={() => {
                  setAutoFill(!autoFill);
                  // Automatically set the 'name' field when the checkbox is checked
                  setFieldValue('name', autoFill ? '' : 'Saanvika');
                }}
              />
              <label>Auto-fill Name with "bla bla"</label>
            </div>

            <div>
              <lable>Email</lable>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <lable>phone</lable>
              <Field name="phone" type="number" />
              <ErrorMessage name="phone" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field
                name="password"
                type={showPassword ? 'text' : 'password'}
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={{ color: 'red' }}
              />
            </div>

            {/* <div>
              <input type="text" disabled={Disabled} />
              <button onClick={() => setDisable(!Disabled)}>Submit</button>
              
              <input type="text" disabled={Disabled} />
              <button onClick={() => setDisable(!Disabled)}>
                Toggle Disabled
              </button>
            </div> */}

            <div>
              <label>Show Passwords</label>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </div>
            <button type="submit" disabled={!(dirty && isValid)}>
              Submit
            </button>

            {successMessage && <div>{successMessage}</div>}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default Practise;
