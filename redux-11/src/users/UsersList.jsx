import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";


class UsersList extends React.Component {

  state = {
    newUsersList: [],
    currentPage: 1
  }
  componentDidMount() {
    this.setState({
      newUsersList: this.props.users.usersList.slice(0, 3)
    })
  }

  goPrev = () => {
    const start = this.props.users.usersList.indexOf(this.state.newUsersList[0])-3;
    const newArr = this.props.users.usersList.slice(start, start+3)
    this.setState({
      newUsersList: newArr,
      currentPage: this.state.currentPage - 1
    })
    console.log(start)

  }
  goNext = (start, end) => {
    const newArr = this.props.users.usersList.slice(start, end)
    this.setState({
      newUsersList: newArr,
      currentPage: this.state.currentPage + 1
    })
  }
  render() {
    const items = 3
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.props.users.usersList.length}
          itemsPerPage={items}
          goPrev={this.goPrev}
          goNext={this.goNext}
        />
        <ul className="users">
          {this.state.newUsersList.map(user => <User key={user.id} name={user.name} age={user.age} />)}
        </ul>
      </div>
    )
  }

}

const mapState = state => {
  return {
    users: state
  }
}


const connector = connect(mapState)

export default connector(UsersList)