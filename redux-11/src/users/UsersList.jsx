import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import * as usersActions from "../users.actions";

const UsersList = (props) => {
  const { usersList, currentPage} = props.users;
  const itemsPerPage = 3;
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  
  const goPrev = () => {
   props.decrement(); 
  };
  
  const goNext = () => {  
    props.increment(); 
  };
 
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
        goPrev={goPrev}
        goNext={goNext}
      />
      <ul className="users">
        {usersList.slice(start,end).map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: state,
  };
};

const mapDispatch = {
  increment: usersActions.increment,
  decrement: usersActions.decrement,
};

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);
