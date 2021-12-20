import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import UsersList from './users/UsersList';
import Filter from './Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <Filter/>
      <UsersList/>
      </div>
    </Provider>
  );
};

export default App;

