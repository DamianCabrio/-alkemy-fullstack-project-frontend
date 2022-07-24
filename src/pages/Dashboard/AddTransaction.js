import { useEffect } from 'react';

import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../contexts/app/appContext';
import Wrapper from '../../styledWrappers/DashboardFormPage';

function AddTransaction() {
  const {
    token,
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
    isEditing,
    clearAlert,
  } = useAppContext();

  useEffect(() => {
    if (categoryOptions.length === 0) {
      fetchCategoryOptions();
    }
  }, [fetchCategoryOptions, categoryOptions.length]);

  const handleInput = (e) => {
    const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!transactionDescription || !transactionAmount || !transactionType || !transactionDate || !transactionCategory) {
      displayAlert('Por favor, complete todos los campos', 'danger');
      return;
    }
    clearAlert();
    console.log('handleSubmit');
  }

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
          />
          <FormRow
            type="date"
            id="transaction-date"
            labelText="Fecha"
            name="transactionDate"
            value={transactionDate}
            handleChange={handleInput}
          />

          <div className="btn-container">
            <button type="submit" className="btn btn-block submit-btn">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
export default AddTransaction;
