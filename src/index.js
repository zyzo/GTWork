import React from 'react';
import { Provider } from 'react-redux';

import InfoForm from './infoForm';
import configureStore from './configureStore';
import initialState from './reducers/initialState';

const App = React.createClass({
  render() {
    const store = configureStore(initialState);
    return (
      <Provider store={store}>
        <InfoForm/>
      </Provider>
    );
  }
});

export default App;
