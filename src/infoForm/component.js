import React from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'underscore';
import { connect } from 'react-redux';
import {
  View, TextInput, Text, DatePickerIOS, Button
} from 'react-native';
import { onSave } from './actions';

const InfoForm = React.createClass({
  getInitialState() {
    return {
      workStart: this.props.workStart,
      estimatedDuration: this.props.estimatedDuration,
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    };
  },
  componentDidMount() {
    AsyncStorage.getItem('@GTWork:infoForm').then(value => {
      if (_.isUndefined(value)) {
        return;
      }
      const savedFormInfo = JSON.parse(value);
      this.setState({
        workStart: new Date(savedFormInfo.workStart),
        estimatedDuration: savedFormInfo.estimatedDuration
      });
    });
  },
  onSave() {
    this.props.onSave({
      workStart: this.state.workStart,
      estimatedDuration: this.state.estimatedDuration
    });
  },
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', marginTop: 40}}>
        <View style={{flex: 4}}>
          <Text>
            Work starts at
          </Text>
          <DatePickerIOS
            date={this.state.workStart}
            mode="time"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={input => {
              this.setState({workStart: input});
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={{flex: 0.5}}>
            Estimated Duration
          </Text>
          <TextInput
            style={{flex: 0.5}}
            onChangeText={input => {
              this.setState({estimatedDuration: input});
            }}
            placeholder="Enter work start hour!"
            keyboardType="numeric"
            value={this.state.estimatedDuration}
          />
        </View>
        <View style={{flex: 3, paddingTop: 10}}>
          <Button color="red" title="Save" onPress={this.onSave}/>
        </View>
      </View>
    );
  }
});

const mapStateToProps = state => ({
  estimatedDuration: state.getIn(['infoForm', 'estimatedDuration']),
  workStart: state.getIn(['infoForm', 'workStart'])
});

const mapDispatchToProps = dispatch => ({
  onSave: _.compose(dispatch, onSave)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoForm);
