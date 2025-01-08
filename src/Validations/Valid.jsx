import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';

const Valid = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({
    Fname: '',
    Lname: '',
    Email: '',
  });

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    console.log(data, '30==');
    reset();
  };
  return (
    <>
      validations
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          {' '}
          <label>enter ur fname</label>
          <input
            placeholder="enter ur Fname"
            {...register('Fname', { required: true, maxLength: 30 })}
          />
        </Form.Field>

        {errors.Fname && <p>please enter ur fname</p>}

        <Form.Field>
          {' '}
          <label>enter ur Lname</label>
          <input
            placeholder="enter ur Lname"
            {...register('Lname', { required: true, maxLength: 30 })}
          />
        </Form.Field>

        {errors.Lname && <p>please enter ur Lname</p>}

        <Form.Field>
          {' '}
          <label>enter ur Email</label>
          <input
            type="text"
            placeholder="enter ur Email"
            {...register('Email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
        </Form.Field>

        {errors.Email && <p>please enter ur email</p>}
        <Button type="submit">SUBMIT</Button>
      </Form>
      {/* <table>
        <thead>
          <tr>
            <th>fname</th>
            <th>lname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            <tr key={item.id}>
              <td style={Border}> {index + 1} </td>
              <td style={Border}> {item.Fname} </td>
              <td style={Border}> {item.lname} </td>
              <td style={Border}> {item.email} </td>
            </tr>;
          })}
        </tbody>
      </table> */}
    </>
  );
};
export default Valid;

/* <Form.Field>
<label>First Name :</label>
<input
    placeholder='First Name'
    type="text"
    {...register("firstName", { required: true, maxLength: 10 })}
/>
</Form.Field>
{errors.firstName && <p>Please check the First Name</p>}
<Form.Field> */