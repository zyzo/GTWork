import { combineReducers } from 'redux-immutable';
import getInitialState, { defaultInitialState } from './getInitialState';

import infoForm from '../infoForm/reducer.js';

const rootReducer = combineReducers({
  infoForm
});

const onLoadState = state => {
  return ({
    type: 'app.onLoadState',
    state
  });
};

export { onLoadState, defaultInitialState, getInitialState };
export default rootReducer;
