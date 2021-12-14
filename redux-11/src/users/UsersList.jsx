import React from "react";
import { connect } from "react-redux";
import User from "./User";
import Pagination from "./Pagination";
import * as usersActions from '../users.actions'


class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.itemsPerPage = 3
    this.state = {
      newUsersList: [],
    }
    
  }
  componentDidMount(){
    this.goNext()
  }


  goPrev = () => {
    const start = (this.props.users.currentPage - 2) * this.itemsPerPage
    const newArr = this.props.users.usersList.slice(start, start + this.itemsPerPage)
    this.setState({
      newUsersList: newArr,
    })
    this.props.decrement()

  }
  goNext = () => {
    const start = this.props.users.currentPage * this.itemsPerPage
    const end = start + this.itemsPerPage
    const newArr = this.props.users.usersList.slice(start, end)
    this.setState({
      newUsersList: newArr,
    })
    this.props.increment()
  }

  render() {

    return (
      <div>
        <Pagination
          currentPage={this.props.users.currentPage}
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

const mapDispatch = {
  increment: usersActions.increment,
  decrement: usersActions.decrement
}

const connector = connect(mapState,mapDispatch)

export default connector(UsersList)