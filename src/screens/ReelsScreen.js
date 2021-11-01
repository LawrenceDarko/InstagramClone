import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const ReelsScreen = () => {
    return (
        <View>
            {/* <StatusBar hidden={true} /> */}
            {/* <StatusBar  backgroundColor={'#ffffff00'} /> */}
            <Text style={{fontSize: 27, marginTop: 36, marginLeft: 30, fontWeight: 'bold'}}>Reels</Text>
        </View>
    )
}

export default ReelsScreen
