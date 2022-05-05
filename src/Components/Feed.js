import React, { useState } from 'react';
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';


const Feed = ({post}) => {
    
    const [hasliked, setHasliked] = useState(false);
    const [likes, setLikes] = useState(0);

    // console.log(likes);

  return (
    <View style={styles.container}>
        <View style={styles.feed}>
                {/* This view shows the post profile */}
                <View style={styles.profile}>
                   <Text> <Icon
                                    name="person-circle-outline"
                                    type="ionicon"
                                    color= "#000"
                                    //width='100%'
                                    //color={toggleColors(focused)}
                                />
                    </Text>
                    <Icon
                                    name="ellipsis-horizontal"
                                    type="ionicon"
                                    color=  '#000'
                                    // size={20}

                                    //color={toggleColors(focused)}
                                />

                </View>

                <View style={styles.feedimage}>
                    <Image source={require('../../assets/feed.jpg')} style={{width: '100%', height: '100%'}}/>
                </View>
                {/* This view shows th social buttons and save icon */}
                <View style={styles.social}>
                    <View style={styles.socialbuttons}>
                        <TouchableOpacity onPress={()=>{setHasliked(!hasliked); !hasliked ? setLikes(likes+1): setLikes(likes-1)}}><Icon
                                    name={hasliked? 'heart':'heart-outline'}
                                    type="ionicon"
                                    color=  {hasliked? 'red':'#000'}
                                    size={26}
                                    //color={toggleColors(focused)}
                                />
                                
                        </TouchableOpacity>
                        
                        <Icon
                                name="chatbubble-outline"
                                type="ionicon"
                                color='#000'
                                //width='100%'
                                //color={toggleColors(focused)}
                        />
                        <Icon
                                name="paper-plane-outline"
                                type="ionicon"
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
                    {likes>0 ? <Text style={{fontWeight: 'bold'}}>{likes} likes</Text> : null}
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
        height: 40,
        // borderWidth: 2,
        // borderColor: 'green',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    socialbuttons: {
        display: 'flex',
        width: 150,
        height: 40,
        flexDirection: 'row',
        // borderWidth: 2,
        justifyContent: 'space-evenly',
        paddingTop: 10,
        // paddingLeft: 10,
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