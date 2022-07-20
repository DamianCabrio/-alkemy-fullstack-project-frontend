import { useState, useEffect } from 'react';

import { Logo, FormRow } from '../components';
import Wrapper from '../styledWrappers/Register';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  isLogin: true,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
      <Logo />
      <h3>Iniciar sesión</h3>
      <FormRow type="email" name="email" value={values.email} handleChange={handleChange} labelText="Email" />
      <FormRow type="password" name="password" value={values.password} handleChange={handleChange} labelText="Contraseña" />
      <button type='submit' className='btn btn-block'>Enviar</button>
      </form>
    </Wrapper>
  );
}
export default Register;
