import React from "react";
import Header from "./Header";
import { DataContext,data } from "./data-context";

class App extends React.Component {

  state = {
    userData: data
  }

  render() {
    return (
      <div className='page'>
        <DataContext.Provider value={this.state.userData} >
          <Header />
        </DataContext.Provider>
      </div>
    )
  }
}

export default App

