import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';

export class LoginScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Login Screen!</Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('HomeApp')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}