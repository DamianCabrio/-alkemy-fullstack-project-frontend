import { FormRow, FormRowSelect } from '.';
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
    categoryOptions,
    transactionTypes,
    fetchCategoryOptions,
    fetchTransactionTypes,
  } = useAppContext();

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
        </div>
      </form>
    </Wrapper>
  );
}
export default SearchContainer;
