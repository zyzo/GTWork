import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import { removeSpending } from '../../actions/spending'

import GlobalStyle from '../styles'
import styles from '../styles/SpendingItem'

const SpendingItemRoot = React.createClass({
  render() {
    const {
      item, removeSpending
    } = this.props
    return (
      <View style={[GlobalStyle.mainView, styles.mainView]}>
        <Text>{item.name}</Text>
        <TouchableOpacity onPress={
          () => {
            removeSpending(item.id)
            this.props.navigator.pop()
          }}
          style={styles.deleteButton}>
          <Text style={{color: 'white'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    )
  }
})

const mapDispatchToProps = dispatch => ({
  removeSpending: itemId => dispatch(removeSpending(itemId))
})

export default connect(
  null,
  mapDispatchToProps
)(SpendingItemRoot)
