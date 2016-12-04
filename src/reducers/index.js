import { combineReducers } from 'redux-immutable'

import spending from './spending'
const rootReducer = combineReducers({
  spending
})

export default rootReducer
