import immutable from 'immutable';
import { AsyncStorage } from 'react-native';
import { initialState as infoForm } from '../infoForm';

const defaultInitialState = immutable.fromJS(
  {
    infoForm
  }
);

const getInitialState = () => {
  return AsyncStorage.getItem('GTWork.state:key').then(value => {
    if (value !== null){
      return immutable.fromJS(value);
    }
    return defaultInitialState;
  }).catch(() => defaultInitialState);
};

export default getInitialState;
