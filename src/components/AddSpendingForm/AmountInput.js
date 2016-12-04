import React from 'react'
import { View, Text, PickerIOS } from 'react-native'

const AmountInput = React.createClass({
  render() {
    const { value, changeValue } = this.props
    const beforeDigits = Math.floor(value)
    const afterDigits = Math.round(100 * ( value - beforeDigits ))
    return (
      <View style={{flexDirection: 'row', flex: 0, alignItems: 'center'}}>
        <View style={{flex:0.4}}>
          <PickerIOS
            selectedValue={beforeDigits}
            onValueChange={val => changeValue(val + afterDigits / 100)}
          >
            {Array.apply(null, {length: 300})
              .map(Number.call, Number).map(item =>
              <PickerIOS.Item key={item} value={item}
                label={item.toString()}/>
            )}
          </PickerIOS>
        </View>
        <View style={{
          padding: 30,
          flex: 0}}>
          <Text style={{fontWeight: 'bold'}}>euros</Text>
        </View>
        <View style={{flex:0.4}}>
          <PickerIOS
            selectedValue={afterDigits}
            onValueChange={val => changeValue(beforeDigits + val / 100.0)}
          >
            {Array.apply(null, {length: 100})
              .map(Number.call, Number).map(item =>
              <PickerIOS.Item key={item} value={item}
                label={item.toString()}/>
            )}
          </PickerIOS>
        </View>
        <View style={{padding: 30, flex: 0}}>
          <Text style={{fontWeight: 'bold'}}>centimes</Text>
        </View>
      </View>
    )
  }
})

export default AmountInput
