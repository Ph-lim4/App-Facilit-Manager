import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import schedulesOverview from './schedulesOverview';

const SchedulesStack = createStackNavigator();
const schedules = () => {
  return <SchedulesStack.Navigator>
    <SchedulesStack.Screen name="SchedulesOverview" component={schedulesOverview} options={{headerShown: false}}/> 
  </SchedulesStack.Navigator>;
}

export default schedules;