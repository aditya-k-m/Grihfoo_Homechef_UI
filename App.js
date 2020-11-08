import React, {Component} from 'react';
import {View} from 'react-native';

import TabNav from './routes/tab_navigation';
import StackNav from './routes/stack_navigation';

export default class App extends Component{
  render(){
    return(
        <StackNav />
    );
  }
}
