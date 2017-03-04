import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  WebView,
  ScrollView,
} from 'react-native';
import { connect } from 'dva/mobile';
import { Card, CardSection } from '../common';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';

class ContentScreen extends Component {
  render() {

    let {id, heading, time, image, audio, summary, questionTitle, questionDetail, transcriptTitle, transcriptDetail, vocabularyTitle, vocabularyDetail} = this.props.sixMinEngData;
    const { idStyle, timeStyle, titleStyle, imageStyle, summaryStyle, transcriptStyle } = styles;
    
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', height: 75}}>
          <Player style={{height: 10}} url={audio} />
        </View>
        <CardSection>
          <Text style={titleStyle}>
            {heading}
          </Text>
        </CardSection>
        <CardSection style={{flexDirection: 'row'}}>
          <Image
            style={imageStyle}
            source={{uri: image}}
          />
        </CardSection>
        <CardSection>
          <Text style={summaryStyle}>
            {summary}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={titleStyle}>
            {questionTitle}
          </Text>
        </CardSection>
        <CardSection>
          <WebView 
            scrollEnabled={true}
            source={{html: questionDetail}}
            style={{height: 200}}
            />
        </CardSection>
        <CardSection>
          <Text style={titleStyle}>
            {transcriptTitle}
          </Text>
        </CardSection>
        <CardSection>
          <WebView 
            scrollEnabled={true}
            source={{html: transcriptDetail}}
            style={{height: 3000}}
          />
        </CardSection>
        <CardSection>
          <Text style={titleStyle}>
            {vocabularyTitle}
          </Text>
        </CardSection>
        <View>
          <WebView 
            scrollEnabled={true}
            source={{html: vocabularyDetail}}
            style={{height: 500}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  idStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  timeStyle: {
    fontSize: 12,
    paddingRight: 5,
    textAlign: 'center',
    lineHeight: 18,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    alignSelf: 'center',
  },
  imageStyle: {
    flex: 1,
    width: 320,
    height: 180,
    resizeMode: 'contain'
  },
  summaryStyle: {
    fontSize: 16,
    paddingLeft: 15,
  },
  transcriptStyle: {
    fontSize: 14,
    paddingLeft: 15,
  },
};

export default connect()(ContentScreen);
