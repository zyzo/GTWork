import immutable from 'immutable';

export const defaultInitialState = {
  workStart: new Date(),
  estimatedDuration: '0'
};

const reducer = (initialState, action) => {
  console.log(initialState, action);
  if (initialState === undefined) {
    initialState = immutable.fromJS(defaultInitialState);
  }
  console.log("adnasdo")
  switch (action.type) {
  case 'infoForm.save':
    console.log('hahadsada');
    return action.formInfo;
  default:
    return initialState;
  }
};

export default reducer;
