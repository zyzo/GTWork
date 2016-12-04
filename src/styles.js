import { StyleSheet } from 'react-native';

export const Colors = {
  p500 : '#03A9F4',
  p50: '#E0F7FA',
  p100: '#B3E5FC',
  p800: '#0277BD',
  p900: '#01579B',
  a100: '#B9F6CA',
  a200: '#69F0AE',
  a400: '#00E676',
  a700: '#00C853',
  red: 'rgb(255, 59, 48)',
  gray: 'gray',
  white: 'white'
};

const GlobalStyle = StyleSheet.create({
  navBar: {
    flex: 1
  },
  mainView: {
    backgroundColor: Colors.white
  }
});

export default GlobalStyle;
