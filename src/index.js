import React from 'react';
import { Provider } from 'react-redux';

import InfoForm from './infoForm';
import configureStore from './configureStore';
import getInitialState from './reducers/getInitialState';

const App = React.createClass({
  getInitialState() {
    return {};
  },
  componentDidMount() {
    getInitialState().then(initialState => {
      console.log(initialState);
      this.setState({ initialState });
    });
  },
  render() {
    console.log(this.state.initialState);
    const store = configureStore(this.state.initialState);
    return (
      <Provider store={store}>
        <InfoForm/>
      </Provider>
    );
  }
});

export default App;
