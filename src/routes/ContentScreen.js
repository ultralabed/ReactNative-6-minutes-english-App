import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import MyWebView from 'react-native-webview-autoheight';
import Tabs from 'react-native-tabs';
import { connect } from 'dva/mobile';
import { Card, CardSection } from '../common';
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';
class ContentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'summary' };
  }

  renderSummary() {
    let { id, heading, image, summary, questionTitle, questionDetail } = this.props.sixMinEngData;
    const { titleStyle, imageStyle, summaryStyle  } = styles;
    
    return (
      <View>
        <CardSection style={{flexDirection: 'row'}}>
          <Image
            style={imageStyle}
            source={{uri: image}}
          />
        </CardSection>
        <Text style={titleStyle}>
          {heading}
        </Text>
        <CardSection>
          <Text style={summaryStyle}>
            {summary}
          </Text>
        </CardSection>
        <Text style={titleStyle}>
          {questionTitle}
        </Text>
        <MyWebView
          source={{html: questionDetail}}
          startInLoadingState={true}
          />
      </View>
    );
  }

  renderTranscript() {
    let { transcriptDetail } = this.props.sixMinEngData;
    
    return (
      <MyWebView
        source={{html: transcriptDetail}}
        startInLoadingState={true}
      />
    );
  }

  renderVocabulary() {
    let { vocabularyDetail } = this.props.sixMinEngData;
    
    return (
      <MyWebView
        source={{html: vocabularyDetail}}
        startInLoadingState={true}
      />
    );
  }

  render() {
    let self = this;
    let { audio } = this.props.sixMinEngData;
    const { container, tabStyle, tabSelectedStyle, selectedIconStyle, contentStyle } = styles;
    
    return (
      <View style={container}>
        <ScrollView style={contentStyle}>
          <View style={{flexDirection: 'row', height: 75}}>
            <Player style={{height: 10}} url={audio} />
          </View>
          {this.state.page === 'summary' ? this.renderSummary() :  null}
          {this.state.page === 'transcript' ? this.renderTranscript() :  null}
          {this.state.page === 'vocabulary' ? this.renderVocabulary() :  null}
        </ScrollView>
        <Tabs selected={this.state.page} style={tabStyle}
              selectedStyle={tabSelectedStyle} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="summary" selectedIconStyle={selectedIconStyle}>Summary</Text>
            <Text name="transcript" selectedIconStyle={selectedIconStyle}>Transcript</Text>
            <Text name="vocabulary" selectedIconStyle={selectedIconStyle}>Vocabulary</Text>
        </Tabs>
      </View>
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
    color: '#000',
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
    color: '#000',
  },
  transcriptStyle: {
    fontSize: 14,
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabStyle: {
    height: 60,
    backgroundColor:'white',
  },
  tabSelectedStyle: {
    color: '#5bc0de',
  },
  selectedIconStyle: {
    borderTopWidth:2,
    borderTopColor:'#5bc0de',
  },
  contentStyle: {
    marginBottom: 55,
  },
};

export default connect()(ContentScreen);
