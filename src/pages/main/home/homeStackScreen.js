import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import dashboard from './dashboard';

const HomeStack = createStackNavigator();
const home = () => {
  return <HomeStack.Navigator>
    <HomeStack.Screen name="Dashboard" component={dashboard} options={{headerShown: false}}/> 
  </HomeStack.Navigator>;
}

export default home;