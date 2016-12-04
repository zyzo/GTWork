import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

import { SpendingListStyle } from '../styles'

const RowItem = React.createClass({
  render() {
    const {
      row
    } = this.props
    return (
      <View style={SpendingListStyle.row}>
        <View style={SpendingListStyle.firstColumn}>
          <Text>
            <Text style={SpendingListStyle.amountLabel}>{row.amount}</Text>
            <Text style={SpendingListStyle.currencyLabel}> €</Text>
          </Text>
          <Text>{row.name}</Text>
        </View>
        <View style={SpendingListStyle.secondColumn}>
          <Text style={SpendingListStyle.timeLabel}>
            {moment(row.time).fromNow()}
          </Text>
        </View>
      </View>
    )
  }
})

export default RowItem
