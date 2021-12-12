import React from "react";

const Pagination = ({ currentPage, totalItems, goPrev, goNext, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1 ? true : false
  const isNextPageAvailable = currentPage < totalItems / itemsPerPage ? true : false
  const arrowBackward = isPrevPageAvailable ? '←' : null
  const arrowForward = isNextPageAvailable ? '→' : null
  const start = currentPage * itemsPerPage
  const end = currentPage * itemsPerPage + itemsPerPage

  return (
    <div className="pagination">
      <button className="btn"
        onClick={() => goPrev(end)}
        disabled={!isPrevPageAvailable}>
        {arrowBackward}
      </button>
      <span className="pagination__page">{currentPage < 1 ? currentPage + 1 : currentPage}</span>
      <button className="btn"
        onClick={() => goNext(start, end)}
        disabled={!isNextPageAvailable}>
        {arrowForward}
      </button>
    </div>
  )
}

export default Pagination