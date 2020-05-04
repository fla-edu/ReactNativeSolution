import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Settings" isHome={true} navigation={this.props.navigation}/>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('SettingsDetail')}>
                    <Text>Go Settings Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}