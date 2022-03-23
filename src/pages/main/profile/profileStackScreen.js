import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import profileOverview from './profilleOverview';
import information from './information';

const ProfileStack = createStackNavigator();
const profile = () => {
  return <ProfileStack.Navigator>
    <ProfileStack.Screen name="ProfileOverview" component={profileOverview} options={{headerShown: false}}/> 
    <ProfileStack.Screen name="Information" component={information} options={{headerShown: false}}/> 
  </ProfileStack.Navigator>;
}

export default profile;