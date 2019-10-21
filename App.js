import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './firstComponent';
import Second from './secondComponent';
import Third from './thirdComponent';
import Global from './golbal';
export default createAppContainer(
  createStackNavigator(
    {
      Global,
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
