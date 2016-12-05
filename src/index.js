import React from 'react';
import { Provider } from 'react-redux';
import immutable from 'immutable';

import InfoForm from './infoForm';
import configureStore from './configureStore';
import { defaultInitialState } from './reducers';

const App = React.createClass({
  render() {
    const store = configureStore(defaultInitialState);
    return (
      <Provider store={store}>
        <InfoForm/>
      </Provider>
    );
  }
});

export default App;
