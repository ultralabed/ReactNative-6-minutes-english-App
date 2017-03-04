import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
} from 'react-native';
import { connect } from 'dva/mobile';
import ListItem from '../components/ListItem';

class MainScreen extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ sixMinEngData }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(sixMinEngData);
  }

  renderRow(sixMinEngData) {
    return <ListItem sixMinEngData={sixMinEngData} />;
  }

  render() {
    const { sixMinEngData } = this.props;

    return (
      <ListView 
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = ({ Firebasedata }) => {
  const { sixMinEngData } = Firebasedata;

  return {
    sixMinEngData,
  };
}

export default connect(mapStateToProps)(MainScreen);
