import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GallaryImage from '../Components/GallaryImage';



const SearchScreen = ({navigation}) => {
    return (
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={"#fff"} />
            <View style={{display: 'flex', height: 70, width: '100%', backgroundColor: '#fff',alignItems: 'center'}}>
                <TextInput style={{borderRadius: 5,  backgroundColor: '#EAEAEA', marginTop: 30, width: '80%', fontSize: 12   }} placeholder='Search' />
            </View>

            {/* This is the main picture gallary */}
            <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
                <GallaryImage />
            </View>
            <TouchableOpacity onPress={() => navigation.push('ExploreScreen')}>
                <Text style={{marginTop: 30}}>Go to Explore Screen</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

export default SearchScreen
