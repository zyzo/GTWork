import { AsyncStorage } from 'react-native';

export const onSave = ({ workStart, estimatedDuration }) => (dispatch) => {
  AsyncStorage.setItem(
    '@GTWork:infoForm', JSON.stringify({ workStart, estimatedDuration})
  ).then(() => {
    dispatch({
      type: 'infoForm.save',
      workStart,
      estimatedDuration
    });
  }).catch(() => {
    dispatch({
      type: 'infoForm.saveError',
      workStart,
      estimatedDuration
    });
  });
};
