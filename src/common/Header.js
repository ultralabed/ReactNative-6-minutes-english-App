import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyles, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{props.headerText}</Text>
    </View>
  );
};

const styles = { 
  viewStyles: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyles: {
    fontSize: 20
  }
};

export { Header };
