import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export class secondComponent extends Component {
  render() {
    return (
      <View style={style.rootContainer}>
        <Text>secondComponent</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default secondComponent;
