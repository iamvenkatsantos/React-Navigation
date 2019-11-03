import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
class Value extends Component {
  componentDidMount() {
    const name = this.props.navigation.getParam('name', 'NO_NAME');
    const age = this.props.navigation.getParam('age', 'AGE');
    const des = this.props.navigation.getParam('des', 'des');
    this.setState({
      ...this.state,
      name: name,
      age: age,
      des: des,
    });
  }
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      des: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Name is: {this.state.name} </Text>
        <Text style={styles.text}> and your age: {this.state.age} </Text>
        <Text style={styles.text}> Description: {this.state.des} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  buttom: {
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    color: 'black',
  },
});
export default Value;
