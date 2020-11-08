import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import CompletedOrder from './../screens/completed_order';
import PendingOrder from './../screens/pending_order';
import OngoingOrder from './../screens/ongoing_order';
import Home from './../screens/home';
import TabNav from './tab_navigation';
import Profile from '../screens/profile';

const screens = {
    TabNav: {
        screen: TabNav,
        navigationOptions: {
            headerShown: false
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    OngoingOrder: {
        screen: OngoingOrder,
        navigationOptions: {
            headerShown: true,
            title: 'Ongoing Order'
        }
    },
    PendingOrder: {
        screen: PendingOrder,
        navigationOptions: {
            headerShown: true,
            title : 'Confirm Order'
        }
    },
    CompletedOrder: {
        screen: CompletedOrder,
        navigationOptions: {
            headerShown: true,
            title: 'Completed Orders'
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false
        }
    }
}

const navigationStack = createStackNavigator(screens);

export default createAppContainer(navigationStack);