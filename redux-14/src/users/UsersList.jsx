import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Filter from "./Filter";
import { getFilterText, usersListToshow } from "../users.selectors";
import { choiceUsers } from "../users.actions";

const UsersList = ({ usersList, filterText, choiceUsers }) => {


  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        choiceUsers={choiceUsers}
      />
      {usersList.map((user) => (
        <User key={user.id} {...user} />
      ))}
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
  choiceUsers: choiceUsers,
};

export default connect(mapState, mapDispatch)(UsersList);
