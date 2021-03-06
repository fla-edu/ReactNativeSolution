import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from './src'
import { HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail } from './src/tab'
import { NotificationsScreen } from './src/drawer'
import { RegisterScreen, LoginScreen } from './src/auth'
import { IMAGE } from './src/constants/Image'


const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
    headerShown: false
})

const StackHome = createStackNavigator();

function HomeStack({navigation, route}) {
  route.state && route.state.index > 0 
  ? navigation.setOptions({tabBarVisible: false}) 
  : navigation.setOptions({tabBarVisible: true})
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
            <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
        </StackHome.Navigator>
    )
}

const StackSettings = createStackNavigator();

function SettingsStack({navigation, route}) {
  route.state && route.state.index > 0 
  ? navigation.setOptions({tabBarVisible: false}) 
  : navigation.setOptions({tabBarVisible: true})
  return (
      <StackSettings.Navigator initialRouteName="Settings">
          <StackSettings.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
          <StackSettings.Screen name="SettingsDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
      </StackSettings.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? IMAGE.ICON_HOME_BLACK : IMAGE.ICON_HOME;
            } else if (route.name === 'Settings') {
              iconName = focused ? IMAGE.ICON_SETTINGS_BLACK : IMAGE.ICON_SETTINGS;
            }

            return <Image source={iconName}  style={{width: 20, height: 20}} resizeMode="contain"/>
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Settings" component={SettingsStack}/>
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
          <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}