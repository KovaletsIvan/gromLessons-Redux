import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.itemsPerPage = 3
    this.state = {
      newUsersList: this.props.users.usersList.slice(0, this.itemsPerPage),
      currentPage: 1,
    }
  }


  goPrev = () => {
    const start = (this.state.currentPage - 2) * this.itemsPerPage
    const newArr = this.props.users.usersList.slice(start, start + this.itemsPerPage)
    this.setState({
      newUsersList: newArr,
      currentPage: this.state.currentPage - 1
    })


  }
  goNext = () => {
    const start = this.state.currentPage * this.itemsPerPage
    const end = start + this.itemsPerPage
    const newArr = this.props.users.usersList.slice(start, end)
    this.setState({
      newUsersList: newArr,
      currentPage: this.state.currentPage + 1
    })
  }

  render() {

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.props.users.usersList.length + 1}
          itemsPerPage={this.itemsPerPage}
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