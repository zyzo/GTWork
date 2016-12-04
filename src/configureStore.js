import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import rootReducer from './reducers';

const loggerMiddleware = createLogger({
  // level: 'warn',
  stateTransformer: state => state && state.toJS()
});

const persistenceMiddleware = ({ getState, dispatch}) => next => action => {
  try {
    AsyncStorage.setItem('GTWork.state', getState());
  } catch (error) {
    // Error saving data
  }
};

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      loggerMiddleware,
      persistenceMiddleware,
      thunkMiddleWare
    )
  );

  return store;
};
