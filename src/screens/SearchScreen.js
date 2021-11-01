import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



const SearchScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.push('ExploreScreen')}>
                <Text>Go to Explore Screen</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default SearchScreen
