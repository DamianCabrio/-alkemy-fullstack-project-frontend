import { useState, useEffect } from 'react';

import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../styledWrappers/Register';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
  isLogin: true,
  showAlert: false,
};

function Register() {
  const [values, setValues] = useState(initialState);

  const toggleForms = () => {
    setValues({ ...values, isLogin: !values.isLogin });
  }

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
        <h3>{values.isLogin ? 'Iniciar sesión' : 'Registrarse'}</h3>
        {values.showAlert && <Alert />}
        {!values.isLogin && (
          <FormRow
            labelText="Nombre"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}
        {!values.isLogin && (
          <FormRow
            labelText="Apellido"
            type="text"
            name="surname"
            value={values.surname}
            onChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
          labelText="Contraseña"
        />
        <button type="submit" className="btn btn-block">
          Enviar
        </button>
        <p>
          {values.isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
          <button type="button" onClick={toggleForms} className="member-btn">
            {values.isLogin ? 'Registrarse' : 'Iniciar sesión'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register;
