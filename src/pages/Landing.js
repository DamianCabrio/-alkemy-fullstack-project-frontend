import { Link } from 'react-router-dom';

import main from '../assets/images/main.svg';
import { Logo } from '../components';

import Wrapper from '../styledWrappers/Landing';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Mantén tus <span>finanzas</span> al dia
          </h1>
          <p>
            En la economía actual es esencial mantener las finanzas a raya, "Tus
            Finanzas" te permite hacerlo de forma fácil y ordenada. No dejes que
            el dinero se te siga escapando de las manos, regístrate y empieza a
            darle rienda a tus finanzas.
          </p>
          <Link to="/registro" className="btn btn-hero">Iniciar Sesión/Registrarse</Link>
        </div>
        <img src={main} alt="Tus Finanzas" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
