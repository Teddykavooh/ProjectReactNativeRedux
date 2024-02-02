import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { store } from "./reduxState/store";
import { Provider } from "react-redux";
import TabOneScreen from './components/TabOneScreen';
import TabTwoScreen from './components/TabTwoScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function StackScreens() {
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
  }
  function DrawerNavigator() {
    return (
      <DrawerNavigator>
        <StackScreens />
      </DrawerNavigator>
    );
  }
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <TabOneScreen />
      </View> */}
      <NavigationContainer>
        <StatusBar style="auto" />
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
