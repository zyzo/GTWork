import { StyleSheet } from 'react-native'

import { Colors } from './index'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 60,
    padding: 10
  },
  deleteButton: {
    backgroundColor: Colors.red,
    padding: 10,
    alignItems: 'center',
    marginTop: 10
  }
})

export default styles
