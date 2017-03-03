import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../common';

class ListItem extends Component {
  onRowPress() {
    console.log(this.props.sixMinEngData)
    Actions.contentScreen({ title: this.props.sixMinEngData.id, sixMinEngData: this.props.sixMinEngData });
  }

  render() {
    console.log(this.props.sixMinEngData)
    const { idStyle, timeStyle, titleStyle, imageStyle } = styles;
    const {id, heading, time, image} = this.props.sixMinEngData;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <Card>
          <CardSection>
            <Text style={titleStyle}>
               { heading }
              <Text style={timeStyle}>
                { time }
              </Text>
            </Text>

          </CardSection>
          <CardSection>
            <Image
              style={imageStyle}
              source={{uri: image}}
            />
          </CardSection>
        </Card>
      </TouchableOpacity>
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
  }
};

export default ListItem;
