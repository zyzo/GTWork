import immutable from 'immutable'

import { initialState as spendingInitState } from './spending'

const initialState = immutable.fromJS(
  {
    spending: spendingInitState
  }
)

export default initialState
