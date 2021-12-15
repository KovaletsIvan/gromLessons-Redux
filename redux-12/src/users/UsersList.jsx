import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import {goNextPage,goPrevPage} from "../users.actions";
import {usersListSelector,currentPageSelector} from "../users.selectors"

const itemsPerPage = 3;

const UsersList = ({usersList, currentPage,goNext,goPrev}) => {
  
  const start = currentPage * itemsPerPage;
  const userToDusplay = usersList.slice(start,start + itemsPerPage);
  

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
        {userToDusplay.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: goNextPage,
  goPrev: goPrevPage,
};

export default connect(mapState, mapDispatch)(UsersList);
