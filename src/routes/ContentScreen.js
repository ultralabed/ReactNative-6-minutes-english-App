import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'dva/mobile';

class ContentScreen extends Component {
  render() {
    console.log(this.props.sixMinEngData)
    const {id, heading, time, image, audio, vocabularyTitle} = this.props.sixMinEngData;
    return (
      <View>
        <Text>
          {heading}
        </Text>
      </View>
    );
  }
}

export default connect()(ContentScreen);
