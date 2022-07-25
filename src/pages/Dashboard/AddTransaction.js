import { useEffect } from 'react';

import { FormRow, FormRowSelect, Alert, FormButton } from '../../components';
import { useAppContext } from '../../contexts/app/appContext';
import Wrapper from '../../styledWrappers/DashboardFormPage';

function AddTransaction() {
  const {
    isLoading,
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
    fetchTransactionTypes,
    isEditing,
    clearAlert,
    handleTransactionInput,
    clearTransactionForm,
    createTransaction,
    editTransaction,
  } = useAppContext();

  useEffect(() => {
    if (categoryOptions.length === 0) {
      fetchCategoryOptions();
    }
  }, [fetchCategoryOptions, categoryOptions.length]);

  useEffect(() => {
    if(transactionTypes.length === 0) {
      fetchTransactionTypes();
    }
  },[fetchTransactionTypes, transactionTypes.length]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    handleTransactionInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionDescription || !transactionAmount || !transactionDate) {
      displayAlert('Por favor, complete todos los campos', 'danger');
      return;
    }

    if (isEditing) {
      editTransaction();
      return;
    }
    clearAlert();
    createTransaction();
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        {showAlert && <Alert />}
        <h3>{isEditing ? 'Editar operación' : 'Agregar operación'}</h3>
        <div className="form-center">
          <FormRow
            type="text"
            id="transaction-description"
            labelText="Descripción"
            name="transactionDescription"
            value={transactionDescription}
            handleChange={handleInput}
          />
          <FormRow
            type="number"
            id="transaction-amount"
            labelText="Monto"
            name="transactionAmount"
            value={transactionAmount}
            handleChange={handleInput}
            min="1"
            step="0.01"
          />
          <FormRow
            type="date"
            id="transaction-date"
            labelText="Fecha"
            name="transactionDate"
            value={transactionDate}
            handleChange={handleInput}
          />
          <FormRowSelect
            labelText="Tipo"
            name="transactionType"
            value={transactionType}
            handleChange={handleInput}
            options={transactionTypes}
            disabled={isEditing}
          />

          <FormRowSelect
            labelText="Categoría"
            name="transactionCategory"
            value={transactionCategory}
            handleChange={handleInput}
            options={categoryOptions}
            disabled={isLoading}
          />

          <div className="btn-container">
            <FormButton
              classes="btn-block submit-btn"
              type="submit"
              labelText="Enviar"
              disabled={isLoading}
            />
            <FormButton
              classes="btn-block clear-btn"
              type="button"
              labelText="Limpiar"
              onClick={clearTransactionForm}
              disabled={isLoading}
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
export default AddTransaction;
