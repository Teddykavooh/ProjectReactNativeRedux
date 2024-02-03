import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={TabOneScreen}
                options={{title: 'Screen 1'}}
            />
            <Stack.Screen
                name="More"
                component={TabTwoScreen}
                options={{title: 'Screen 2'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};