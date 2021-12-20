import React from "react";
import {connect} from "react-redux"
import {usersListToshow,getFilterText} from "./users.selectors"
import {choiceUsers} from "./users.actions"

const Filter = ({ filterText, usersList, choiceUsers }) => {
  
  return (
    <div className="filter">
      <span className="filter__count">{usersList.length}</span>
      <input
        type="text"
        className="filter__input"
        value={filterText}
        onChange={()=>choiceUsers(document.querySelector('.filter__input').value)}
      />
    </div>
  );
};
const mapState =(state)=>{
  return{
    usersList: usersListToshow(state),
    filterText: getFilterText(state),
  }
}

const mapDispatch = {
  choiceUsers: choiceUsers,
};

export default connect(mapState,mapDispatch)(Filter);

