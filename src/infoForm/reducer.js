export const initialState = {
  workStart: new Date(),
  estimatedDuration: '0'
};

const reducer = (initialState, action) => {
  switch (action.type) {
  case 'infoForm.save':
    return action.formInfo;
  default:
    return initialState;
  }
};

export default reducer;
