import React from 'react'
import { connect } from 'react-redux'
import {
  ListView, Text, View, TouchableOpacity
} from 'react-native'

import SpendingItem from '../SpendingItem'
import RowItem from './RowItem'
import GlobalStyle from '../styles'

const SpendingList = React.createClass({
  navigateToItem(row) {
    const nextRoute = {
      component: SpendingItem,
      title: row.name,
      passProps: { item: row }
    }
    this.props.navigator.push(nextRoute)
  },
  render() {
    const {
      spendingList
    } = this.props
    const dataSource = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1.id !== r2.id
      }
    ).cloneWithRows(spendingList.toJS())
    return (
      <ListView dataSource={dataSource} style={GlobalStyle.mainView}
        renderRow={
        row => (
          <TouchableOpacity onPress={() => this.navigateToItem(row)}>
            <RowItem row={row}/>
          </TouchableOpacity>
        )}
      />
    )
  }
})

const mapStateToProps = state => (
  {
    spendingList: state.getIn(['spending', 'displayList'])
  }
)
const SpendingListContainer = connect(
  mapStateToProps
)(SpendingList)

export default SpendingListContainer
