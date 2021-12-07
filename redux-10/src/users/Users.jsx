import React from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions"

const Users = ({ usersList, addUser, deleteUser }) => {
  
  return (
    <div className="users">
      <button className="users__create-btn" onClick={addUser}>Create user</button>
      <ul className="users__list">
        {usersList.map(user => 
          <li key={user.id} className="users__list-item">
            <span>{`User # ${user.id}`}</span>
            <button className="users__delete-btn" onClick={()=>deleteUser(user.id)}>+</button>
          </li>
        )}
      </ul>
    </div>
  )
}

const mapState = state => {
  return {
    usersList: state.users.usersList
  }
}

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser
}


const connector = connect(mapState, mapDispatch)

export default connector(Users)