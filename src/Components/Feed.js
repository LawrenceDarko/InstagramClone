import React from 'react';
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';


const Feed = ({post}) => {
    
  return (
    <View style={styles.container}>
        <View style={styles.feed}>
                {/* This view shows the post profile */}
                <View style={styles.profile}>
                    <Icon
                                    name="user-circle-o"
                                    type="font-awesome"
                                    color=  '#000'
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
                    <Icon
                                    name="ellipsis-h"
                                    type="font-awesome-5"
                                    color=  '#000'
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />

                </View>

                <View style={styles.feedimage}>
                    <Image source={require('../../assets/feed.jpg')} style={{width: '100%', height: '100%'}}/>
                </View>
                {/* This view shows th social buttons and save icon */}
                <View style={styles.social}>
                    <View style={styles.socialbuttons}>
                        <Icon
                                    name="heart"
                                    type="font-awesome-5"
                                    color=  '#000'
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
                        <Icon
                                name="comment-o"
                                type="font-awesome"
                                color='#000'
                                //width='100%'
                                //color={toggleColors(focused)}
                        />
                        <Icon
                                name="paper-plane-o"
                                type="font-awesome"
                                color='#000'
                                //width='100%'
                                //color={toggleColors(focused)}
                        />
                    </View>
                    <View style={styles.saveicon}>
                        <Icon
                                    name="bookmark-o"
                                    type="font-awesome"
                                    color='#000'
                                    //width='100%'
                                    //color={toggleColors(focused)}
                            />
                    </View>
                   

                </View>
                <View style={styles.feedtext}>
                    <Text style={styles.feedtexttitle}><Text style={{fontWeight: 'bold'}}>ampem_dev</Text> This is the descripton</Text>
                    <Text style={{paddingTop: 10}}>View all 42 comments</Text>
                </View>
            </View>
    </View>
  )
}

export default Feed;

const styles = StyleSheet.create({
    stories: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
      borderWidth: 2,
      marginTop: 0,
      borderColor: 'yellow'
    },

    feed: {
        height: 610,
        // borderWidth: 2,
        backgroundColor: '#fff',
    },
    profile: {
        height: 50,
        // borderWidth: 2,
        // borderColor: 'red',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10

    },
    feedimage: {
        height: 430,
        // borderWidth: 2,
        // borderColor: 'blue'
    },
    social: {
        height: 50,
        // borderWidth: 2,
        // borderColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    socialbuttons: {
        display: 'flex',
        width: 150,
        flexDirection: 'row',
        // borderWidth: 2,
        justifyContent: 'space-evenly',
        paddingTop: 10
    },
    saveicon: {
        display: 'flex',
        width: 50,
        flexDirection: 'row',
        // borderWidth: 2,
        justifyContent: 'space-evenly',
        paddingTop: 10,

    },
    feedtext: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        height: 80,
        // borderWidth: 2,
        // borderColor: 'red',
    },
    feedtexttitle: {
       

    },


  });