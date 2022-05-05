import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Icon } from "react-native-elements";
// import { Video } from 'expo-av'
// import VideoPlayer from 'expo-video-player'

// https://youtu.be/C2vXw06XY2E

const ReelsScreen = () => {
    return (
        <View>
            
            <ImageBackground style={{width: '100%', height: '100%'}} resizeMode="cover" source={require('../../assets/stories.jpeg')}>
            {/* <StatusBar hidden={true} /> */}
            {/* <StatusBar  backgroundColor={'#ffffff00'} /> */}
            <View style={styles.screentitle}>
                <Text style={{fontSize: 27, marginLeft: 30, fontWeight: 'bold', color: '#fff'}}>Reels</Text>
                <Icon
                                    name="camera-outline"
                                    type="ionicon"
                                    color= "#fff"
                                    iconStyle={{marginLeft: 'auto', marginRight: 15}}
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
            </View>
            
            <View style={styles.likesandcomment}>
            <View>
                <Icon
                                        name="heart-outline"
                                        type="ionicon"
                                        color= "#fff"
                                        //width='100%'
                                        //color={toggleColors(focused)}
                                    />
                <Text style={{fontSize: 10, marginLeft: 2,  color: '#fff'}}>3.3M</Text>
            </View>
            <View>
             <Icon
                                    name="chatbubble-outline"
                                    type="ionicon"
                                    color= "#fff"
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
                <Text style={{fontSize: 10, marginLeft: 2,  color: '#fff'}}>12K</Text>
            </View>
             <Icon
                                    name="paper-plane-outline"
                                    type="ionicon"
                                    color= "#fff"
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
            <Icon
                                    name="ellipsis-horizontal"
                                    type="ionicon"
                                    color= "#fff"
                                    size={15}
                                    //color={toggleColors(focused)}
                                />
            <Icon
                                    name="square-outline"
                                    type="ionicon"
                                    color= "#fff"
                                    // iconStyle={{paddingBottom: 10}}
                                    //color={toggleColors(focused)}
                                />
            </View>
            </ImageBackground>
        </View>
    )
}

export default ReelsScreen

const styles = StyleSheet.create({
    likesandcomment: {
        flexDirection: 'column',
        height: 250,
        width: 50,
        // borderWidth: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 250,
        marginLeft: 270,
        paddingBottom: 10
    },

    screentitle: {
        display: 'flex',
        flexDirection: 'row', 
        // borderWidth: 1, 
        height: 40,
        marginTop: 36,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})