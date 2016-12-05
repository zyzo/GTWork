import immutable from 'immutable';
import { AsyncStorage } from 'react-native';
import { initialState as infoForm } from '../infoForm';

export const defaultInitialState = immutable.fromJS({
  infoForm
});

const getInitialState = () =>
  AsyncStorage.getItem('GTWork.state').then(value => {
    if (value !== null){
      // We have data!!
      return immutable.fromJS(JSON.parse(value));
    }
    return defaultInitialState;
  }).catch(() => {
    // Error retrieving data
    return defaultInitialState;
  });

export default getInitialState;
