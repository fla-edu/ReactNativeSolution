import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
              <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => this.props.navigation.navigate('HomeDetail')}>
                    <Text>Go Home Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
        );
    }
}