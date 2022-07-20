import { Link } from 'react-router-dom';

import img404 from '../assets/images/not-found.svg';
import Wrapper from '../styledWrappers/Error';

function Error() {
  return <Wrapper className='full-page'>
    <div>
      <img src={img404} alt='404' />
      <h3>¡Oh! La pagina que busca no se encontró</h3>
      <p>Puede que haya escrito mal la dirección o que la página que busca no exista.</p>
      <Link to='/'>Ir a la página principal</Link>
    </div>
  </Wrapper>
}
export default Error;
