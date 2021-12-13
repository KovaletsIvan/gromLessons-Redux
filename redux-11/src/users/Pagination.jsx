import React from "react";

const Pagination = ({ currentPage, totalItems, goPrev, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1
  const isNextPageAvailable = currentPage < totalItems / itemsPerPage


  return (
    <div className="pagination">
      <button className="btn"
        onClick={goPrev}
        disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : null}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn"
        onClick={() => goNext()}
        disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>
  )
}

export default Pagination