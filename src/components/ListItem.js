import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../common';

class ListItem extends Component {
  onRowPress() {
    console.log(this.props.sixMinEngData)
    Actions.contentScreen({ title: this.props.sixMinEngData.heading, sixMinEngData: this.props.sixMinEngData });
  }

  render() {
    console.log(this.props.sixMinEngData)
    const { idStyle, timeStyle, titleStyle, imageStyle, summarytyle } = styles;
    const { id, heading, time, image, summary } = this.props.sixMinEngData;
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
          <CardSection>
            <Text style={summarytyle}>
              { summary }
            </Text>
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
    textAlign: 'center',
    lineHeight: 18,
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 10,
    alignSelf: 'center',
    color: '#000',
  },
  imageStyle: {
    width: 320,
    height: 180,
    resizeMode: 'contain'
  },
  summarytyle: {
    padding: 10,
    fontSize: 16,
    textAlign: 'justify',
  },
};

export default ListItem;
