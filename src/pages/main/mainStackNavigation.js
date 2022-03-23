import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { black } from '../../components/colors'
import { Feather } from '@expo/vector-icons';
import { w } from '../../components/dimens';

import homeStack from './home/homeStackScreen'
import schedulesStack from './schedules/schedulesStackScreen'
import profileStack from './profile/profileStackScreen'

const Tab = createBottomTabNavigator();
function main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={homeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name={"home"} color={black()} size={w(23)}/>
                    ),
                }} />
            <Tab.Screen name="Agendamentos" component={schedulesStack} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Agendamentos',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name={"calendar"} color={black()} size={w(23)}/>
                    ),
                }} />
            <Tab.Screen name="Perfil" component={profileStack} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name={"user"} color={black()} size={w(23)}/>
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default main;