import React from "react";

const Filter = ({ filterText, count, changeUsers }) => {
  return (
    <div className="filter">
      <span className="filter__count">{count}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={(e) => changeUsers(e.target.value)}
      />
    </div>
  );
};

export default Filter;
