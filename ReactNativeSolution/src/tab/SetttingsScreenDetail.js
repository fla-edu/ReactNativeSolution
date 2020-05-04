import React, {Component} from 'react'
import { Text, View } from 'react-native';
import { CustomHeader } from '../index'

export class SettingsScreenDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Settings Detail" navigation={this.props.navigation}/>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings Detail!</Text>
              </View>
            </View>
        );
    }
}