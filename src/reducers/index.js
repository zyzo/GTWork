import { combineReducers } from 'redux-immutable';

import infoForm from '../infoForm/reducer.js';

const rootReducer = combineReducers({
  infoForm
});

export default rootReducer;
