import { useAppContext } from '../contexts/app/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Transaction from './Transaction';
import Wrapper from '../styledWrappers/TransactionsContainer';
import Alert from './Alert';
import PaginationContainer from './PaginationContainer';

function TransactionsContainer() {
  const {
    transactions,
    getTransactions,
    isLoading,
    currentPage,
    numOfPages,
    totalTransactions,
    showAlert,
    search,
    searchType,
    searchCategory,
    sort,
  } = useAppContext();

  useEffect(() => {
    getTransactions();
  }, [getTransactions, search, searchType, searchCategory, sort, currentPage]);

  if (isLoading) {
    return <Loading center />;
  }

  if (transactions.length === 0 && !isLoading) {
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
      {numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
}
export default TransactionsContainer;
