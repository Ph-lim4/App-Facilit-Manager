import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import about_company from './about_company'
import address from './address'
import localization from './localization';
import phone from './phone';
import phone_confirm from './phone_confirm';
import tags from './tags';
import time from './time';
import select_time from './select_time';
import category_name from './category_name';
import service_characteristics from './service_characteristics';
import add_employee from './add_employee';
import congratulations from './congratulations';
import add_owner from './add_owner';
import congratulations_02 from './congratulations_02';
import select_break from './select_break';
import category from './category';
import service from './service';





const RegisterStack = createStackNavigator();
const registerStackScreen = () => {
    return (
        <RegisterStack.Navigator>
            <RegisterStack.Screen name={"Teste"} component={about_company} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"About_company"} component={about_company} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Address"} component={address} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Localization"} component={localization} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Phone"} component={phone} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Phone_confirm"} component={phone_confirm} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Tags"} component={tags} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Time"} component={time} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Select_time"} component={select_time} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Select_break"} component={select_break} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Category"} component={category} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Category_name"} component={category_name} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Service"} component={service} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Service_characteristics"} component={service_characteristics} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Congratulations"} component={congratulations} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Add_employee"} component={add_employee} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Add_owner"} component={add_owner} options={{ headerShown: false }} />
            <RegisterStack.Screen name={"Congratulations_02"} component={congratulations_02} options={{ headerShown: false }} />
            
        </RegisterStack.Navigator>
    );
}

export default registerStackScreen;