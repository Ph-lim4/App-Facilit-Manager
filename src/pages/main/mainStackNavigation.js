import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { black } from '../../components/colors'
import { Feather } from '@expo/vector-icons';
import { w } from '../../components/dimens';


function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
function main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name={"home"} color={black()} size={w(23)}/>
                    ),
                }} />
            <Tab.Screen name="Agendamentos" component={HomeScreen} 
                options={{
                    headerShown: false,
                    tabBarLabel: 'Agendamentos',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name={"calendar"} color={black()} size={w(23)}/>
                    ),
                }} />
            <Tab.Screen name="Perfil" component={SettingsScreen} 
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