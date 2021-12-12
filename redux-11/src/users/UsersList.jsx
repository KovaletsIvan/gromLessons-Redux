import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.itemsPerPage = 3
    this.state = {
      newUsersList: this.props.users.usersList,
      currentPage: this.props.users.currentPage
    }
  }

  componentDidMount() {
    this.setState({
      newUsersList: this.props.users.usersList.slice(this.props.users.currentPage, this.itemsPerPage)
    })
  }

  goPrev = () => {
    const start = this.props.users.usersList.indexOf(this.state.newUsersList[0]) - this.itemsPerPage;
    const newArr = this.props.users.usersList.slice(start, start + this.itemsPerPage)
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
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalItems={this.props.users.usersList.length}
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