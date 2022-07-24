import { useEffect } from 'react';

import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../contexts/app/appContext';
import Wrapper from '../../styledWrappers/DashboardFormPage';

function AddTransaction() {
  const {
    showAlert,
    displayAlert,
    transactionDescription,
    transactionAmount,
    transactionType,
    transactionDate,
    transactionCategory,
    categoryOptions,
    transactionTypes,
    fetchCategoryOptions,
  } = useAppContext();

  useEffect(() => {
    if (categoryOptions.length === 0) {
      fetchCategoryOptions();
    }
  }, [fetchCategoryOptions, categoryOptions.length]);

  return <div>Add Transaction Page</div>;
}
export default AddTransaction;
