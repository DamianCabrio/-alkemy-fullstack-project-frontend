import { useAppContext } from '../contexts/app/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../styledWrappers/PaginationContainer';

function PaginationContainer() {
  const { numOfPages, currentPage } = useAppContext();

  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const nextPage = () => {
    console.log('nextPage');
  };

  const prevPage = () => {
    console.log('prevPage');
  };

  return (
    <Wrapper>
      <button type="button" className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
      </button>
      <div className="btn-container">
        {pages.map((page) => {
          return (
            <button
              type="button"
              key={page}
              className={currentPage === page ? 'pageBtn active' : 'pageBtn'}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button type="button" className="next-btn" onClick={nextPage}>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
export default PaginationContainer;
