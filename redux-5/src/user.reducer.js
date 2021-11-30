const initialState = { usersList: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER:
      return { ...state, userList: state.usersList.concate(action.payload) };
    case DELETEUSER:
      return {
        ...state,
        userList: state.usersList.slice(
          state.usersList.findIndex((elem) => elem.id == payload.id),
          1
        ),
      };
  }
};
