import React, {Component} from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import queryString from 'query-string';
import axios from 'axios';
export class paymentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web: true,
      url: '',
      paymentId: '',
      paryerId: '',
    };
  }
  componentDidMount() {
    console.log('WEB URL', this.props.navigation.getParam('url', 'no-email'));
    this.setState(
      {
        ...this.state,
        url: this.props.navigation.getParam('url', 'no-email'),
      },
      () => console.log(this.state.url),
    );
  }

  _onNavigationStateChange = async web => {
    const URL = queryString.parseUrl(web.url);

    if (URL.query.paymentId) {
      console.log(URL.query.paymentId);
      this.setState({
        ...this.state,
        web: false,
        url: web.url,
        paymentId: URL.query.paymentId,
        paryerId: URL.query.PayerID,
      });
      let res = await axios.post('http://10.0.2.2:3000/success', this.state);
      //   console.log('============================================', res);
      //   this.setState({...this.state, url: res.data});
      //   this.props.navigation.navigate('PaymentSecond', {
      //     msg: res.data,
      //   });
    }
  };
  ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color="#E8A927"
        style={{justifyContent: 'center', alignItems: 'center'}}
        size="large"
      />
    );
  }
  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        startInLoadingState={true}
        renderLoading={this.ActivityIndicatorLoadingView}
      />
    );
  }
}

export default paymentPage;
