import React from "react";

const Pagination = ({ currentPage, totalItems, goPrev, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 0
  const isNextPageAvailable = currentPage < Math.ceil(totalItems / itemsPerPage)-1

  return (
    <div className="pagination">
      <button className="btn"
        onClick={goPrev}
        disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable ? '←' : null}
      </button>
      <span className="pagination__page">{currentPage+1}</span>
      <button className="btn"
        onClick={goNext}
        disabled={!isNextPageAvailable}>
        {isNextPageAvailable ? '→' : null}
      </button>
    </div>
  )
}

export default Pagination