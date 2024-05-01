import { useState } from 'react';
import './Pagination.css'

function Pagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    for (let i = 1; i <= totalPages; i++) {
      paginationItems.push(
        <button key={i} onClick={() => handleClick(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }
    return paginationItems;
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>Précédent</button>
      {renderPaginationItems()}
      <button onClick={handleNext} disabled={currentPage === totalPages}>Suivant</button>
    </div>
  );
}

export default Pagination;
