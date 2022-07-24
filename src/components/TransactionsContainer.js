import { useAppContext } from '../contexts/app/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Transaction from './Transaction';
import Wrapper from '../styledWrappers/TransactionsContainer';
import Alert from './Alert';

function TransactionsContainer() {
  const {
    transactions,
    getTransactions,
    isLoading,
    currentPage,
    totalTransactions,
    showAlert,
  } = useAppContext();

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  if (isLoading) {
    return <Loading center />;
  }

  if (transactions.length === 0) {
    return (
      <Wrapper>
        <h2>No hay operaciones para mostrar</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalTransactions}{' '}
        {transactions.length > 1 ? 'operaciones' : 'operación'} en total
      </h5>
      <div className="transactions">
        {transactions.map((transaction) => {
          return <Transaction key={transaction.id} transaction={transaction} />;
        })}
      </div>
    </Wrapper>
  );
}
export default TransactionsContainer;
