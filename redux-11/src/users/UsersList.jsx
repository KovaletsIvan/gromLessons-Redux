import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";



class UsersList extends React.Component {

  state = {
    newUsersList: this.props.users.usersList,
    currentPage: this.props.users.currentPage
  }

  componentDidMount() {
    this.goNext(0, 3)
  }

  goPrev = (end) => {
    const newArr = this.props.users.usersList.slice(this.state.currentPage - 2, end / 3)
    this.setState({
      newUsersList: newArr,
      currentPage: this.state.currentPage - 1
    })


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