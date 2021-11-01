import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <StatusBar hidden={false} />
            <Text>Home</Text>
        </View>
    )
}

export default HomeScreen
