import React from 'react';
import { AppRegistry } from 'react-native';
import Router from './src/Router';
import dva, { connect } from 'dva/mobile';
import firebaseDataModel from './src/models/firebasedata';

const app = dva();

app.model(firebaseDataModel);

app.router(() => <Router />);

AppRegistry.registerComponent('reactNativeSixMinutesEnglish', () => app.start());
