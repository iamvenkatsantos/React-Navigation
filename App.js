import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './firstComponent';
import Second from './secondComponent';
import Third from './thirdComponent';
import Global from './golbal';
import PaymentHome from './paymentHome';
import PaymentPage from './paymentPage';
import PaymentSecond from './paymentSecond';
export default createAppContainer(
  createStackNavigator(
    {
      PaymentHome,
      Global,
      PaymentSecond,
      PaymentPage,
      First,
      Second,
      Third,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);
