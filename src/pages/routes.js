import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import login from './auth/login'
import register from './register/registerStackScreen'
import main from './main/mainStackNavigation';

const Stack = createStackNavigator();

const routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Teste" component={main} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={register} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={main} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default routes;