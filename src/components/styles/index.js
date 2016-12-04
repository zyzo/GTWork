import { StyleSheet } from 'react-native'

/*
 * https://material.google.com/style/color.html#color-color-palette
 * p for primary
 * a for accent
 */
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
}

export const GlobalStyle = StyleSheet.create({
  navBar: {
    flex: 1
  },
  mainView: {
    backgroundColor: Colors.white
  }
})

export const SpendingListStyle = StyleSheet.create({
  row: {
    backgroundColor: Colors.p100,
    padding: 10,
    marginTop: 5,
    flexDirection: 'row',
    flex: 1
  },
  firstColumn: {
    flex: 0.6
  },
  secondColumn: {
    flex: 0.4,
    alignItems: 'flex-end'
  },
  amountLabel: {
    fontSize: 30
  },
  currencyLabel: {
    opacity: 0.8
  },
  timeLabel: {
    opacity: 0.6
  }
})

export default GlobalStyle
