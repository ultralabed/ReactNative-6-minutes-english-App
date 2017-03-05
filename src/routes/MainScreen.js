import firebase from 'firebase';
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ActivityIndicator,
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
    const { sixMinEngData, loadingData } = this.props;
    const { centering } = styles;

    return (
      <View>
        {loadingData ?
          (<ActivityIndicator
              animating={loadingData}
              style={[centering, {height: 80}]}
              size="large"
          />)
          :
        null}

        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}
const styles = {
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
};
const mapStateToProps = ({ Firebasedata }) => {
  const { sixMinEngData, loadingData } = Firebasedata;

  return {
    sixMinEngData,
    loadingData,
  };
}

export default connect(mapStateToProps)(MainScreen);
