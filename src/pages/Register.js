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
        {values.showAlert && <Alert />}
      </form>
    </Wrapper>
  );
}
export default Register;
