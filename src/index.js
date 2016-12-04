import React from 'react'
import { Provider } from 'react-redux'

import SpendingList from './components/SpendingList'
import configureStore from './configureStore'
import initialState from './reducers/initialState'

const App = React.createClass({
  render() {
    const store = configureStore(initialState)
    return (
      <Provider store={store}>
        <SpendingList/>
      </Provider>
    )
  }
})

export default App
