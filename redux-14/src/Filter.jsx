import React from "react";

const Filter = ({ filterText, count, changeUsers }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={() =>
          changeUsers(document.querySelector(".filter__input").value)
        }
      />
    </div>
  );
};

export default Filter;
