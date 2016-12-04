import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'

import rootReducer from './reducers'

const loggerMiddleware = createLogger({
  // level: 'warn',
  stateTransformer: state => state && state.toJS()
})

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleWare
    )
  )

  return store
}
