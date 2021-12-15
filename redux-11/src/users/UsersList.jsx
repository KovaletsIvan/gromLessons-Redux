import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import * as usersActions from "../users.actions";

const UsersList = ({ users, currentPage,increment,decrement}) => {
  
  const itemsPerPage = 3;
  const start = currentPage * itemsPerPage;
  const usersToDislay = users.slice(start,start + itemsPerPage);
  

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        goPrev={decrement}
        goNext={increment}
      />
      <ul className="users">
        {usersToDislay.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage:state.users.currentPage
  };
};

const mapDispatch = {
  increment: usersActions.increment,
  decrement: usersActions.decrement,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
