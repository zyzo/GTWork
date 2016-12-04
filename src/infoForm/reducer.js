import immutable from 'immutable';

export const defaultInitialState = {
  workStart: new Date(),
  estimatedDuration: '0'
};

const reducer = (initialState, action) => {
  if (initialState === undefined) {
    initialState = immutable.fromJS(defaultInitialState);
  }
  switch (action.type) {
  case 'infoForm.save':
    return action.formInfo;
  default:
    return initialState;
  }
};

export default reducer;
