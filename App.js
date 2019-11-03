import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import First from './firstComponent';
import Second from './secondComponent';
import Third from './thirdComponent';
import Global from './golbal';
import List from './savaadikathada';
import Value from './value';
export default createAppContainer(
  createStackNavigator(
    {
      List,
      Global,
      First,
      Second,
      Third,
      Value,
    },
    {
      defaultNavigationOptions: {
        header: null,
      },
    },
  ),
);
