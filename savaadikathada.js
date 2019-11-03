import React, {Component} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

class Saavaadikathada extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DATA: [
        {
          name: 'mohan',
          age: 23,
          des: 'suma',
        },
        {
          name: 'hari',
          age: 21,
          des: 'suma',
        },
        {
          name: 'abinesh',
          age: 22,
          des: 'suma',
        },
        {
          name: 'guru',
          age: 24,
          des: 'suma',
        },
      ],
    };
  }

  render() {
    var SampleNameArray = [
      'Pankaj',
      'Rita',
      'Mohan',
      'Amit',
      'Babulal',
      'Sakshi',
    ];
    return (
      <View style={styles.container}>
        {this.state.DATA.map((item, key) => (
          <TouchableOpacity
            style={styles.buttom}
            onPress={() => {
              this.props.navigation.navigate('Value', {
                name: item.name,
                age: item.age,
                des: item.des,
              });
            }}>
            <Text style={styles.text} key={key}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
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
    color: 'white',
  },
});

export default Saavaadikathada;
