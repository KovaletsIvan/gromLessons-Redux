import React from "react";
import { connect } from "react-redux";
import * as usersActions from "../users.actions";

class SearchField extends React.Component {
  state = {
    userName: "",
  };

  onChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleUserSearch = () => {
    this.props.fetchUserData(this.state.userName);
    this.setState({
      userName: "",
    });
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataRecived: usersActions.userDataRecived,
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);