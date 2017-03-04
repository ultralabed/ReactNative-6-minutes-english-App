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
  console.log('!!!!!!',sixMinEngData);
  // const sixMinEngData = [{
  //     id: 'Episode 170209',
  //     heading: 'Can you trust your own eyes?',
  //     image: 'http://ichef.bbci.co.uk/images/ic/320x180/p04vg694.jpg',
  //     time: '09 Feb 2017',
  //     audio: 'http://downloads.bbc.co.uk/learningenglish/features/6min/170209_6min_english_eyewitness_download.mp3',
  //     vocabularyTitle: 'Vocabulary',
  //   },{
  //     id: 'Episode 170208',
  //     heading: 'Believe your own faith?',
  //     image: 'http://ichef.bbci.co.uk/images/ic/256xn/p026r9h2.jpg',
  //     time: '07 Feb 2017',
  //     audio: 'http://downloads.bbc.co.uk/learningenglish/features/6min/170209_6min_english_eyewitness_download.mp3',
  //     vocabularyTitle: 'Vocabulary',
  //   },
  // ];
  
  return {
    sixMinEngData,
  };
}

export default connect(mapStateToProps)(MainScreen);
