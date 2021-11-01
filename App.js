import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/BottomTabNavigation/Tabs'
import { createStackNavigator } from '@react-navigation/stack';
import ActivityPage from "./src/Pages/Activity";
import MessagesPage from "./src/Pages/Messages";

const PageStack = createStackNavigator();

export default function App() {

  const HomeTabs = () => {
    return (
      <Tabs />
    )
  }

  const Activity = () => {
    return (
      <View>
        <ActivityPage />
      </View>
    )
  }

  const Messages = () => {
    return (
      <View>
        <MessagesPage />
      </View>
    )
  }
  

  
  

  return (
    <NavigationContainer>
      <PageStack.Navigator>
        <PageStack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown: false }}/>
        <PageStack.Screen name="Activity" component={Activity} />
        <PageStack.Screen name="Messages" component={Messages} />
      </PageStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
