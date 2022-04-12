import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import profileOverview from './profilleOverview';
import information from './information';
import tags from './tags';
import time from './time';
import address from './address';
import category from './category';
import category_name from './category_name';

const ProfileStack = createStackNavigator();
const profile = () => {
  return <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileOverview" component={profileOverview} options={{headerShown: false}}/> 
    <ProfileStack.Screen name="Information" component={information} options={{headerShown: false}}/> 
    <ProfileStack.Screen name="Tags" component={tags} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Time" component={time} options={{headerShown: false}}/> 
    <ProfileStack.Screen name="Address" component={address} options={{headerShown: false}}/> 
    <ProfileStack.Screen name="Category" component={category} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Category_name" component={category_name} options={{headerShown: false}}/>
  </ProfileStack.Navigator>;
}

export default profile;