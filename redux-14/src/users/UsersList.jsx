
   
import React from "react";
import { connect } from "react-redux";
import User from "./User";
import { getFilterText, usersListToshow } from "../users.selectors";
import Filter from "../Filter";
import { choiceUsers } from "../users.actions";

const UsersList = ({ usersList, filterText, changeUsers }) => {
  return (
    <div>
      <Filter
        count={usersList.length}
        filterText={filterText}
        changeUsers={changeUsers}
      />
      <ul className="users">
        {usersList.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: usersListToshow(state),
    filterText: getFilterText(state),
  };
};
const mapDispatch = {
  changeUsers: choiceUsers,
};

export default connect(mapState, mapDispatch)(UsersList);