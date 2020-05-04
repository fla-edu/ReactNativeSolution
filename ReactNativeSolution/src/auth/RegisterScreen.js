import React, {Component} from 'react'
import { Text, View } from 'react-native';
import { CustomHeader } from '../index'

export class RegisterScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Register" navigation={this.props.navigation}/>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Register Screen!</Text>
              </View>
            </View>
        );
    }
}