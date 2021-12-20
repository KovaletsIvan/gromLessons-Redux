import React from "react";
import { connect } from "react-redux";
import User from "./User";
import {  usersListToshow } from "../users.selectors";


const UsersList = ({ usersList}) => {

  return (
    <div>
      {usersList.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: usersListToshow(state),
  };
};



export default connect(mapState)(UsersList);
