import { useState, useEffect } from 'react';

import { Logo } from '../components';
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
      <div className="form-row">
        <label htmlFor='name' className='form-label'>Nombre</label>
        <input
          type='text'
          id='name'
          name='name'
          className='form-input'
          onChange={handleChange}
          value={values.name}
        />
      </div>
      <button type='submit' className='btn btn-block'>Enviar</button>
      </form>
    </Wrapper>
  );
}
export default Register;
