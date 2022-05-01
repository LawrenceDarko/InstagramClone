import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const StoriesList = ({imageLink}) => {
    console.log(imageLink)
  return (
    <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={styles.storiesStyle}>
            <Image style={styles.storyThumbnail} source={imageLink.imageLink1} />
            <Text style={{marginTop: 5}}>Your Story</Text>
        </View>
    </View>
  )
}

export default StoriesList;

const styles = StyleSheet.create({
    storiesStyle: {
        borderColor: 'orange',
        height: 70,
        width: 70,
        borderWidth: 2,
        borderRadius: 50,
        marginLeft: 10,
        
        
        // position: 'relative'
    },

    storyThumbnail: {
        height: 66,
        width: 66,
        borderRadius: 50,
        // position: 'absolute',
        justifyContent: 'center',
    }
});