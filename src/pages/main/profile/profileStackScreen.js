import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import profileOverview from './profilleOverview';
import information from './information';
import tags from './tags';
import time from './time';
import address from './address';
import category from './category';
import category_name from './category_name';
import service from './service';
import service_characteristics from './service_characteristics';
import employee from './employee';
import payment_method from './payment_method';
import select_time from './select_time';
import select_break from './select_break';
import payment_method_name from './payment_method_name';

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
    <ProfileStack.Screen name="Service" component={service} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Service_characteristics" component={service_characteristics} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Employee" component={employee} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Payment_method" component={payment_method} options={{headerShown: false}}/>
    <ProfileStack.Screen name='Select_time' component={select_time} options={{headerShown: false}}/>
    <ProfileStack.Screen name='Select_break' component={select_break} options={{headerShown: false}}/>
    <ProfileStack.Screen name='Add_employee' component={select_break} options={{headerShown: false}}/>
    <ProfileStack.Screen name="Payment_method_name" component={payment_method_name} options={{headerShown: false}}/>
  </ProfileStack.Navigator>;
}

export default profile;