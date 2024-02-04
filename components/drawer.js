import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import TabOneScreen from './TabOneScreen';
import TabTwoScreen from './TabTwoScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={TabOneScreen}
            options={{title: 'Home'}}
          />
          <Drawer.Screen
            name="More"
            component={TabTwoScreen}
            options={{title: 'More'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}