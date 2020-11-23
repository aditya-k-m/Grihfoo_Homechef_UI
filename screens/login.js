import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pin1: "",
            pin2: "",
            pin3: "",
            pin4: "",
            isModalVisible: false
        }
    }

    closeModal() {
        this.setState({
            isModalVisible: false
        });
    }

    getOTP() {
        // this.props.navigation.navigate('TabNav')
        this.setState({
            isModalVisible: true
        })
    }

    async startSession() {
        try {
            await AsyncStorage.setItem("sessionId", "valid");
        }
        catch (error){
            console.log("Error saving data: "+error);
        }
    }

    submitOTP() {
        this.setState({
            isModalVisible: false
        });
        this.startSession();
        this.props.navigation.navigate('TabNav');
    }

    toRegister() {
        this.props.navigation.navigate('Register');
    }

    async componentDidMount() {
        try {
            let sessionValue = await AsyncStorage.getItem("sessionId");
            if (sessionValue === "valid"){
                this.props.navigation.navigate('TabNav');
            }
            else{
                console.log("Session not found");
            }
        }
        catch (error) {
            console.log("Error retriving data: "+error);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 'auto' }}>Login to Grihfoo</Text>
                <TextInput placeholder="Enter your number" keyboardType={'numeric'} style={{ textAlign: 'center' }} />
                <TouchableOpacity onPress={() => { this.getOTP() }} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', marginBottom: 'auto', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Get OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.toRegister() }} style={{ paddingBottom: 50, marginTop: 'auto' }} >
                    <Text style={{fontSize: 16, color: 'blue'}} >New to Grihfoo ? Register here !</Text>
                </TouchableOpacity>

                <Modal animationIn="slideInUp"
                    animationOut="slideOutDown"
                    onBackdropPress={() => this.closeModal()}
                    isVisible={this.state.isModalVisible}
                    style={{ backgroundColor: 'white', maxHeight: Dimensions.get('window').height / 4, marginTop: 'auto', marginBottom: 'auto' }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 5 }}>We have sent an OTP to your number</Text>
                    <View style={{ flex: 1, paddingTop: 25 }}>
                        <View style={{ flex: 0.6, justifyContent: 'space-evenly', flexDirection: "row" }}>
                            <TextInput
                                ref={'pin1ref'}
                                maxLength={1}
                                //placeholder = {"Enter your name"}
                                onChangeText={(pin1) => {
                                    this.setState({ pin1: pin1 })
                                    if (pin1 != "") {
                                        this.refs.pin2ref.focus()
                                    }
                                }}
                                value={this.state.pin1}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}

                            />
                            <TextInput
                                ref={'pin2ref'}
                                maxLength={1}
                                onChangeText={(pin2) => {
                                    this.setState({ pin2: pin2 })
                                    if (pin2 != "") {
                                        this.refs.pin3ref.focus()
                                    }
                                }}
                                value={this.state.pin2}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                            <TextInput
                                ref={'pin3ref'}
                                maxLength={1}
                                onChangeText={(pin3) => {
                                    this.setState({ pin3: pin3 })
                                    if (pin3 != "") {
                                        this.refs.pin4ref.focus()
                                    }
                                }}
                                value={this.state.pin3}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                            <TextInput
                                ref={'pin4ref'}
                                maxLength={1}
                                onChangeText={(pin4) => {
                                    this.setState({ pin4: pin4 })
                                }
                                }
                                value={this.state.pin4}
                                //placeholder = {"Enter your name"}
                                style={styles.OTPinput}
                                keyboardType={'numeric'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { this.submitOTP() }} style={{ backgroundColor: '#31326f', height: 40, flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#e8e8e8' }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', paddingTop: 8, paddingHorizontal: 10 }}>Submit</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    OTPinput: {
        backgroundColor: '#f5f4f2',
        justifyContent: 'center',
        fontWeight: '600',
        alignSelf: "center",
        fontSize: 18,
        height: 45,
        width: '10%',
        borderRadius: 30,
        borderWidth: 0.5,
        borderColor: 'grey',
        textAlign: 'center',
        marginBottom: 0
    }
})