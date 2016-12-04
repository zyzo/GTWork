import { StyleSheet } from 'react-native'

import { Colors } from './index'

const styles = StyleSheet.create({
  mainView: {
    marginTop: 60
  },
  form: {
    flex: 1,
    marginTop: 10
  },
  textInput: {
    height: 40,
    padding: 0,
    borderColor: Colors.a400,
    borderBottomWidth: 0.5
  },
  button: {
    backgroundColor: Colors.a400,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  formLabel: {
    borderColor: Colors.a400,
    borderTopWidth: 0.5,
    padding: 10,
  },
  nameLabelText: {
    fontSize: 20,
    color: Colors.gray
  }
})

export default styles
