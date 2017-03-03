import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { connect } from 'dva/mobile';
import MainScreen from './routes/MainScreen';
import ContentScreen from './routes/ContentScreen';

class RouterComponent extends Component {
  render() {
    const { title } = this.props;
    const  navBarHeight = Number(Platform.OS === 'ios' ? '64': '44');
    return (
      <Router sceneStyle={{ paddingTop: navBarHeight }}>
        <Scene key="main">
          <Scene
            key="mainScreen"
            component={MainScreen}
            title="6 Minutes English"
            initial/>
          <Scene
            key="contentScreen"
            component={ContentScreen}
            title="test"/>
        </Scene>
      </Router>
    );
  };
};

export default connect()(RouterComponent);
