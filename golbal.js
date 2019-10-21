import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export class golbal extends Component {
  render() {
    return (
      <View style={style.rootContainer}>
        <TouchableOpacity
          style={style.container1}
          onPress={() => this.props.navigation.navigate('First')}>
          <Text>To First</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.container2}
          onPress={() => this.props.navigation.navigate('Second')}>
          <Text>To seecond</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.container3}
          onPress={() => this.props.navigation.navigate('Third')}>
          <Text>To Third</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width,
    height,
  },
  container1: {
    width,
    height: height / 3,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    width,
    height: height / 3,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    width,
    height: height / 3,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default golbal;
