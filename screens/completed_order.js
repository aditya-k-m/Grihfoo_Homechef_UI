import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class CompletedOrder extends Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <Text style={{textAlign: 'center', fontSize: 32, fontWeight: 'bold'}}>
                    Completed Orders
                </Text>
            </View>
        )
    }
}