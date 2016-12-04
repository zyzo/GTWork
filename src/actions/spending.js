import { SPENDING } from './types.js'
import * as U from '../utils'

export const addSpending = (item, callback, callbackError) => dispatch => {
  // some validation here
  const valid = true
  if (valid) {
    dispatch({
      type: SPENDING.ADD_SPENDING,
      item
    })
    if (U.isFunction(callback)) callback()
  } else {
    if (U.isFunction(callbackError)) callbackError()
  }
}

export const changeToAddSpending = (prop, value) => (
  {
    type: SPENDING.CHANGE_TO_ADD_SPENDING,
    prop,
    value
  }
)

export const removeSpending = id => (
  {
    type: SPENDING.REMOVE_SPENDING,
    id
  }
)
