import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ReelsScreen from "../screens/ReelsScreen";
import ShopScreen from "../screens/ShopScreen";
import AccountPage from "../screens/AccountPage";
import ExploreScreen from "../Pages/Explore";
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';

const BTab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

const SearchStackScreen = () => {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
        <SearchStack.Screen name="ExploreScreen" component={ExploreScreen} />
      </SearchStack.Navigator>
    )
    
}


const Tabs = () => {
    return (
        <BTab.Navigator
        screenOptions ={{ //previous code was tabBarOptions
                "tabBarShowLabel": false,
                "tabBarStyle":[ 
                    {
                        display: 'flex',
                        position: 'absolute',
                        button: 27,
                        elevation: 0,
                        background: '#fff',
                        height: 60,
                    }]
            }}
        >
            <BTab.Screen name="Home" component={HomeScreen} options={({navigation}) => ({
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon
                            name="home"
                            type="simple-line-icon"
                            color= {focused ? '#000' : '#000'}
                            //width='100%'
                            //color={toggleColors(focused)}
                        />
                        {/* <Text>Home</Text> */}
                    </View>
                ),
                headerLayoutPreset: 'left',
                headerRight: () => (
                    <View style={{display:'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            onPress={() => navigation.push('Activity')}>
                            <Image 
                                source={require('../assetsPhone/tabicons/plus.png')}
                                
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>  navigation.push('Activity')}>
                            <Image 
                                source={require('../assetsPhone/tabicons/heart.png')}
                                style={{ marginLeft: 20}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Messages')}>
                            <Image 
                                source={require('../assetsPhone/tabicons/msg.png')}
                                style={{ marginLeft: 20, marginRight: 10}}
                            />
                        </TouchableOpacity>
                    </View>
                  ),
            })}/>
            <BTab.Screen name="Search" component={SearchStackScreen} options={{headerShown: false, 
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon
                            name="search"
                            type="font-awesome-5"
                            color= {focused ? '#000' : '#000'}
                            //width='100%'
                            //color={toggleColors(focused)}
                        />
                        {/* <Text>Home</Text> */}
                    </View>
                ),
            }}/>
            <BTab.Screen name="Reels" component={ReelsScreen} options={{
                headerShown:false,
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon
                            name="movie"
                            type="material"
                            color= {focused ? '#000' : '#000'}
                            //width='100%'
                            //color={toggleColors(focused)}
                        />
                        {/* <Text>Home</Text> */}
                    </View>
                ),
            }}/>
            <BTab.Screen name="Shop" component={ShopScreen} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon
                            name="shop"
                            type="material"
                            color= {focused ? '#000' : '#000'}
                            //width='100%'
                            //color={toggleColors(focused)}
                        />
                        {/* <Text>Home</Text> */}
                    </View>
                ),
            }}/>
            <BTab.Screen name="Account" component={AccountPage} options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <Icon
                            name="user-circle"
                            type="font-awesome-5"
                            color= {focused ? '#000' : '#000'}
                            //width='100%'
                            //color={toggleColors(focused)}
                        />
                        {/* <Text>Home</Text> */}
                    </View>
                ),
            }}/>
        </BTab.Navigator>
    )
}

export default Tabs
