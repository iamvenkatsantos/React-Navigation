import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export class thirdComponent extends Component {
  render() {
    return (
      <View style={style.rootContainer}>
        <Text>thirdComponent</Text>
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
export default thirdComponent;
