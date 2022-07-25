import { useEffect } from 'react';

import { FormRow, FormRowSelect, FormButton } from '.';
import { useAppContext } from '../contexts/app/appContext';
import Wrapper from '../styledWrappers/SearchContainer';

function SearchContainer() {
  const {
    isLoading,
    search,
    searchType,
    searchCategory,
    sort,
    handleInputChange,
    clearFilters,
    sortOptions,
    categoryOptions,
    transactionTypes,
    fetchCategoryOptions,
    fetchTransactionTypes,
  } = useAppContext();

  useEffect(() => {
    if (categoryOptions.length === 0) {
      fetchCategoryOptions();
    }
  }, [fetchCategoryOptions, categoryOptions.length]);

  useEffect(() => {
    if (transactionTypes.length === 0) {
      fetchTransactionTypes();
    }
  }, [fetchTransactionTypes, transactionTypes.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (isLoading) return;
    handleInputChange(e.target.name, e.target.value);
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>Búsqueda</h4>
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Buscar por descripción"
            name="search"
            value={search}
            handleChange={handleSearch}
            placeholder="Buscar"
          />
          <FormRowSelect
            labelText="Tipo de transacción"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            options={[{ name: 'Todos', id: 'all' }, ...transactionTypes]}
            disabled={isLoading}
          />
          <FormRowSelect
            labelText="Categoría"
            name="searchCategory"
            value={searchCategory}
            handleChange={handleSearch}
            options={[{ name: 'Todas', id: 'all' }, ...categoryOptions]}
            disabled={isLoading}
          />
          <FormRowSelect
            labelText="Ordenar por"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            options={sortOptions}
          />
          <FormButton
            type="button"
            name="clearFilters"
            classes="btn-block btn-danger"
            labelText="Limpiar filtros"
            onClick={clearFilters}
            disabled={isLoading}
          />
        </div>
      </form>
    </Wrapper>
  );
}
export default SearchContainer;
