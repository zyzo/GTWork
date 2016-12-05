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
    AsyncStorage.setItem('GTWork.state', JSON.stringify(action.formInfo)).then(() => {
      console.log('local saving done');
    }).catch(error => {
      console.log(error);
    });
  } catch (error) {
    // Error saving data
    console.log(error);
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
