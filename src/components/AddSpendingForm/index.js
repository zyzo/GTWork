import React from 'react'
import { connect } from 'react-redux'
import {
  View, TextInput, Text, TouchableOpacity,
  Keyboard, Animated, Dimensions
} from 'react-native'

import AmountInput from './AmountInput'
import { addSpending, changeToAddSpending } from '../../actions/spending'

import GlobalStyle from '../styles'
import styles from '../styles/AddSpendingForm'

let _keyboardWillShowSubscription = null, _keyboardWillHideSubscription = null

const AddSpendingFormRoot = React.createClass({
  getInitialState() {
    return {
      value: 1,
      keyboardOffset: new Animated.Value(0),
      containerHeight: Dimensions.get('window').height
    }
  },
  _keyboardWillShow(e) {
    this.setState({
      containerHeight:
        Dimensions.get('window').height - e.endCoordinates.height
    })
    Animated.spring(this.state.keyboardOffset, {
      toValue: e.endCoordinates.height,
      friction: 6
    }).start()
  },
  _keyboardWillHide() {
    this.setState({
      containerHeight: Dimensions.get('window').height
    })
    Animated.spring(this.state.keyboardOffset, {
      toValue: 0,
      friction: 6
    }).start()
  },
  componentDidMount() {
    _keyboardWillShowSubscription = Keyboard.addListener(
      'keyboardWillShow', (e) => this._keyboardWillShow(e))
    _keyboardWillHideSubscription = Keyboard.addListener(
      'keyboardWillHide', (e) => this._keyboardWillHide(e))
  },
  componentWillUnmount() {
    if (_keyboardWillShowSubscription) {
      _keyboardWillShowSubscription.remove()
    }
    if (_keyboardWillHideSubscription) {
      _keyboardWillHideSubscription.remove()
    }
  },
  render() {
    const {
      toAddItem, addItem, changeToAddItem
    } = this.props
    return (
      <Animated.View style={[
        GlobalStyle.mainView, styles.mainView,
        {height: this.state.containerHeight}
      ]}>
        <View style={styles.form}>
          <AmountInput value={toAddItem.get('amount')}
            changeValue={changeToAddItem('amount')}/>
          <View style={styles.formLabel}>
            <Text style={styles.nameLabelText}>
              Description
            </Text>
          </View>
          <TextInput
            style={styles.nameInputText}
            onChangeText={changeToAddItem('name')}
            value={toAddItem.get('name')}
          />
          <TouchableOpacity onPress={
            () => addItem(
              toAddItem, () => this.props.navigator.pop(), null)
            }>
            <View style={styles.button}>
              <Text style={{color: 'white'}}>
                Add new spending
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
})

const mapStateToProps = state => ({
  toAddItem: state.getIn(['spending', 'toAdd'])
})

const mapDispatchToProps = dispatch => ({
  addItem: (item, callback, callbackError) =>
    dispatch(addSpending(item, callback, callbackError)),
  changeToAddItem: prop => text => dispatch(changeToAddSpending(prop, text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpendingFormRoot)
