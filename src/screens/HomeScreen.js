import React from 'react';
import { StatusBar } from 'react-native';
import { Icon } from "react-native-elements";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Feed from '../Components/Feed';
import StoriesList from '../Components/StoriesList';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const HomeScreen = () => {
    const storyImageArray = {
        imageLink1 : require('../../assets/easthood.jpg'),
        // imageLink1 : require('../../assets/story.jpg')
    }

    const [posts, setPosts] = useState([]);

    // This is how to create reference to a collection in firebase v9
    postsCollectionsRef = collection(db, 'posts');
    

    return (
        <ScrollView>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={false} />
                {/* This view shows the stories */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.stories}>
                    <StoriesList imageLink={storyImageArray} />
                </ScrollView>

                {/* This view shows the posts */}
                <Feed/>
                
                
            
            </ScrollView>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    stories: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#fff',
    //   alignItems: 'flex-start',
    //   justifyContent: 'space-around',
      paddingTop: 10,
    //   marginRight: 10,
      height: 110,
    //   paddingLeft: 10,
    //   borderWidth: 2,
      marginTop: 0,
    //   borderColor: 'yellow'
    },

    feed: {
        height: 530,
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    profile: {
        height: 50,
        borderWidth: 2,
        borderColor: 'red',


    },
    feedimage: {
        height: 430,
        borderWidth: 2,
        borderColor: 'blue'
    },
    social: {
        height: 50,
        borderWidth: 2,
        borderColor: 'green',
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

    }


  });