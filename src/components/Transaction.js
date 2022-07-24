import { DateTime } from 'luxon';
import {
  FaMoneyBillWaveAlt,
  FaCalendarAlt,
} from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/app/appContext';
import Wrapper from '../styledWrappers/Transaction';
import TransactionInfo from './TransactionInfo';

function Transaction({ transaction }) {
  const { amount, date, description, id, type, category_name } = transaction;

  const { setEditTransaction, deleteTransaction } = useAppContext();

  const formattedDate = DateTime.fromISO(date).toFormat('dd LLL yyyy');
  const typeString = type === '0' ? 'ingreso' : 'egreso';
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{typeString.charAt(0)}</div>
        <div className="info">
          <h5>{description}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <TransactionInfo icon={<MdCategory />} text={category_name} />
          <TransactionInfo icon={<FaMoneyBillWaveAlt />} text={`$${amount}`} />
          <TransactionInfo icon={<FaCalendarAlt />} text={formattedDate} />
          <div className={`type ${typeString}`}>{typeString}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/dashboard/agregar"
              className="btn edit-btn"
              onClick={() => setEditTransaction(id)}
            >
              Editar
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => deleteTransaction(id)}
            >
              Eliminar
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
}
export default Transaction;
