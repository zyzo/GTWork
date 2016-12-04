import React from 'react';
import { connect } from 'react-redux';
import {
  View, TextInput
} from 'react-native';

const InfoForm = React.createClass({
  render() {
    const { estimatedDuration } = this.props;
    return (
      <View>
        <TextInput
          onChangeText={() => console.log('haha')}
          value={estimatedDuration}
        />
      </View>
    );
  }
});

const mapStateToProps = state => ({
  estimatedDuration: state.getIn(['infoForm', 'estimatedDuration'])
});

export default connect(
  mapStateToProps
)(InfoForm);
