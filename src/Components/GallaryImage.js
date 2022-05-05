import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, TextInput, Image } from 'react-native'

const GallaryImage = () => {
  return (
    <View style={styles.galleryStyle}>
        <Image source={require('../../assets/feed.jpg')} style={{width: '100%', height: '100%'}}/>
    </View>
  )
}

export default GallaryImage;

const styles = StyleSheet.create({
    galleryStyle: {
        backgroundColor: '#fff',
        height: 106,
        width: 106.5,
        borderWidth: 0.5,
        borderColor: '#fff',
    }
})