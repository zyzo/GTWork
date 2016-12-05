import immutable from 'immutable';
export const initialState = immutable.fromJS({
  workStart: new Date(),
  estimatedDuration: '0'
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case 'infoForm.save':
    const newState = state
      .set('estimatedDuration', action.estimatedDuration)
      .set('workStart', action.workStart);
    return newState;
  default:
    return state;
  }
};

export default reducer;
