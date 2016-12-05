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
      <View style={{flex: 1, flexDirection: 'column', marginTop: 40, backgroundColor: '#ededed'}}>
        <View style={{flex: 3}}>
          <DatePickerIOS
            date={this.state.workStart}
            mode="time"
            timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
            onDateChange={input => {
              this.setState({workStart: input});
            }}
          />
          <Text style={{ flex: 1, textAlign: 'center', marginTop: 40 }}>
            Work starts
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            style={{flex: 1, textAlign: 'center', fontSize: 40}}
            onChangeText={input => {
              this.setState({estimatedDuration: input});
            }}
            keyboardType="numeric"
            value={this.state.estimatedDuration}
          />
          <Text style={{flex: 0.5, textAlign: 'center', marginTop: 40}}>
            Estimated Duration
          </Text>
        </View>
        <View style={{flex: 0.5, marginTop: 40, backgroundColor: 'white', justifyContent: 'center',
          alignItems: 'center'}}>
          <Button color="#ade611"
            title="Save"
            onPress={this.onSave}
          />
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
