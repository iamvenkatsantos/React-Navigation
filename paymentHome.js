import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
export class payment_home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      redirectUrl: '',
    };
  }

  paymentMethod = async () => {
    console.log('works');

    try {
      let Response = await axios.get('http://10.0.2.2:3000/paypal');
      //console.log(JSON.stringify(Response.data));
      this.setState({...this.state, redirectUrl: Response.data});
      this.props.navigation.navigate('PaymentPage', {
        url: this.state.redirectUrl,
      });
      console.log(this.state.redirectUrl);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  render() {
    return (
      <View style={style.rootContainer}>
        <TextInput
          placeholder="Enter amount here..!"
          value={this.state.amount}
          keyboardType="number-pad"
          style={style.input}
          onChangeText={e => this.setState({...this.state, amount: e})}
        />
        <TouchableOpacity style={style.button} onPress={this.paymentMethod}>
          <View style={style.container2}>
            <Text style={style.text}> Pay with Paypal </Text>
            <Text
              style={{
                ...style.text,
                fontStyle: 'normal',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {' '}
              >{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width,
    height,
  },
  container1: {
    width,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: '#f0fff0',
  },
  container2: {
    width: width * 0.78,
    height: width * 0.1,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#09b360',
    borderWidth: 0.5,
    borderRadius: 9,
    borderColor: '#09b360',
  },
  input: {
    width: width * 0.8,
    height: width * 0.1,
    borderColor: '#09b360',
    borderWidth: 0.5,
    borderRadius: 9,
  },
  button: {
    height: width * 0.09,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#f0fff0',
    fontStyle: 'italic',
    fontWeight: '500',
  },
});

export default payment_home;
