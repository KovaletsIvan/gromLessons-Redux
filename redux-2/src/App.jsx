import React from "react";
import Header from "./Header";
import { DataContext, data } from "./data-context";

class App extends React.Component {

  state = {
    userDate: data
  }

  render() {
    console.log(this.state.userDate)
    return (
      <div className='page'>
        <DataContext.Provider value={this.state.userDate} >
          <Header />
        </DataContext.Provider>
      </div>
    )
  }
}

export default App

