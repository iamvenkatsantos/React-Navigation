import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
export class paymentSecond extends Component {
  render() {
    const URL = this.props.navigation.getParam('url', 'no-url');

    return (
      <View>
        <Text> {this.props.navigation.getParam('msg', 'noo')} </Text>
      </View>
    );
  }
}

export default paymentSecond;
